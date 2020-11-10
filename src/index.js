// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import './images/hotel-exterior.jpg'
import './images/user-profile.svg'
import './images/hotel-rooftop.jpg'
import './images/room-gaudy.jpg'
import './images/room-kingly.jpg'
import './images/room-kinfolk.jpg'
import './images/room-modish.jpg'
import './images/room-small.jpg'
import './images/room-sparse.jpg'
import './images/room-suite.jpg'
import './images/room-xtrasmall.jpg'
import './images/room-xtrasmall2.jpg'

import { roomImages, bathroomImages, lobbyImages } from './images/image-assets';

import {
  domObject,
  profileIcon,
  loginBox,
  loginButton,
  usernameInput,
  passwordInput,
  navBooking,
  navRooms,
  navContact,
  navManagerHotel,
  navManagerBooking,
  navManagerHistory,
  navCustomerFindRooms,
  navCustomerAccount,
  navCustomerHotel,
  calendar,
  logoutButton,
  managerUserSearch,
  bookingToolbar,
  dashboardCustomer,
  managerDashboard,
  mainContentContainer,
  managerUserSearchInput,
  calendarInput,
  dashboardHeader,
  toolbarSubmit,
  roomTypeDropdown
} from './classes/domObject';

let userData;
let bookingData;
let roomData;
let user;
let date;

let fetchedUserData = apiRequest.getUserData();
let fetchedBookingData = apiRequest.getBookingData();
let fetchedRoomData = apiRequest.getRoomData();

import User from './classes/User';
import Manager from './classes/Manager';
import Booking from './classes/Booking';

import { apiRequest } from './classes/apiRequest';

// ------------------ event listeners ------------------

profileIcon.addEventListener('click', domObject.showLogin);
loginButton.addEventListener('click', checkLogin);
logoutButton.addEventListener('click', refreshPage)
navBooking.addEventListener('click', showCustomerDashboard);
managerUserSearchInput.addEventListener('keypress', returnUserInfo);
navCustomerHotel.addEventListener('click', showHomePage);
navCustomerAccount.addEventListener('click', showMyBookings);
navCustomerFindRooms.addEventListener('click', showCustomerDashboard)
dashboardCustomer.addEventListener('click', bookRoom)
toolbarSubmit.addEventListener('click', sortByRoomType)
document.querySelector('#booking-toolbar').addEventListener('click', highlightLink)

// } else if (event.target.id === 'calendar-input' || event.target.id === 'room-types') {
//   toolbarSubmit.classList.add('active_nav');
// }


// navManagerHotel.addEventListener('click', domObject.showHomePageManager);

// ------------------ scratch pad -------------------

document.querySelector('nav').addEventListener('click', highlightLink) //TODO need click handler to target nav, remove indicuvdual target links, delegate task

function highlightLink() {
  document.querySelectorAll('.highlightable_link').forEach(node => {
    node.classList.remove('active_nav')
  });
  if (event.target.classList.contains('highlightable_link')) {
    event.target.classList.add('active_nav');
}
}

//onclick of navbar
//add active_nav to event.target if link
//remove active_nav if any children contain it

// ------------------ functions ---------------------

Promise.all([fetchedUserData, fetchedBookingData, fetchedRoomData])
  .then(value => {
    userData = value[0]['users'];
    bookingData = value[1]['bookings'];
    roomData = value[2]['rooms'];
    loadApp();
  })
  .catch(error => console.log(error))

function checkLogin() {
  let usernamePre = usernameInput.value.split('').slice(0,8).join('').toLowerCase()
  let userID = username.value.split('').slice(8).join('')
  let password = passwordInput.value.toString()
  if (password === 'overlook2020' && usernamePre === 'customer' && userID.length > 0 && userID < 51 && userID > 0) {
    user = new User(userData[userID-1])
    showCustomerDashboard()
  } else if (password === 'overlook2020' && usernameInput.value.toLowerCase() === 'manager') {
    user = new Manager()
    showManagerDashboard()
  } else {
    alert('Invalid login information')
  }
  domObject.showLogin()
  showMyBookings()
  event.preventDefault()
}

function loadApp() {
  date = '2020/03/01';
  let formattedDate = date.replaceAll('/','-')

  calendarInput.setAttribute('min', formattedDate);
  calendarInput.setAttribute('value', formattedDate);

  user = new User(userData[3])
  // user = new Manager()
  // showManagerDashboard()

  //TODO set to normal after testing
  console.log(user, date, 'remember to change this information back');
}

function refreshPage() {
  window.location.reload();
}

function getCalendarDate() {
  return calendarInput.value.replaceAll('-','/')
}

// ------------- Dashboard Display ------------------

function showMyBookings() {
  loadUserAccountInfo(bookingData, 'customer');
  domObject.showToolbar(false);
  domObject.showDashboardHeader(true);
  showDashboardMessage();
}

function showDashboardMessage() {
  let bookingTotal = user.viewMyBookings(bookingData).length;
  dashboardHeader.innerHTML = '';
  dashboardHeader.insertAdjacentHTML('beforeend',
  `
  <p>Thanks for your continued support ${user.name}. You have ${bookingTotal > 1 ? bookingTotal + ' bookings' : bookingTotal + ' booking'} on record with us${bookingTotal > 20 ? '. WHOA!' : '!'}</p>
  `)
}

function showCustomerDashboard() {
  if (user instanceof User) {
    domObject.showCustomerDashboard(true);
    domObject.showToolbar(true);
    domObject.hideElement(managerUserSearch);
    domObject.showDashboardHeader(false);
    loadAvailableRooms(date);
    navCustomerFindRooms.classList.add('active_nav')
  } else {
    alert('Please log in to view available rooms')
  }
  console.log(navCustomerFindRooms.classList);
}

function showManagerDashboard() {
  domObject.hideHomeView(true);
  domObject.hideManagerView(false);
  domObject.showToolbar(true);
  domObject.hideElement(toolbarSubmit)
  domObject.hideElement(roomTypeDropdown)
  // domObject.showCustomerDashboard(false);
}

function showHomePage() {
  domObject.hideHomeView(false)
  domObject.showToolbar(false);
}

function loadUserAccountInfo(bookingData, customerManager, name) {
  let dashboard = customerManager === 'manager' ? managerDashboard : dashboardCustomer;
  let bookings = customerManager === 'manager' ? user.viewCustomerBookings(bookingData, userData, name) : user.viewMyBookings(bookingData);
  // TODO add empty state for manager
  // dashboard.insertAdjacentHTML('afterbegin', `
  //   <div id='sorry_message-wrapper'><p id='sorry_message'>Welcome Boss, let's get to work</p></div>
  // `)
  dashboard.innerHTML = ''
  bookings.forEach((booking, i) => {
    let room = roomData.find(room => room.number === booking.roomNumber)
    let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];
    dashboard.insertAdjacentHTML('beforeend',
    `
    <article id='my-booking_card-${i}' class='my-booking_card'>
    <div class='my-booking_image-wrapper'>
    <img class='my-booking_image' src=${randomImage}>
    </div>
    <section class='my_booking-text_wrapper'>
    <div>
    <p>Room Type: ${room.roomType}</p>
    <p>Room number: ${room.number}</p>
    <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}</p>
    <p>${room.bidet ? 'Amenities: bidet' : ''}</p>
    </div>
    <div>
    <p>booked for: ${name ? name : user.name}</p>
    <p>for: ${booking.date}</p>
    <p>customer id: ${booking.userID}</p>
    <p>booking id: ${booking.id}</p>
    </div>
    <div>
    <p>$${room.costPerNight.toFixed(2)}</p>
    </div>
    </section>
    </article>
    `);
  });
}

function loadAvailableRooms(date, roomType) {
  date = getCalendarDate()
  let bookingArray = user.viewAvailableRoomsByType(bookingData, roomData, date, roomType);
  dashboardCustomer.innerHTML = ''
  if (bookingArray.length === 0) {
    dashboardCustomer.insertAdjacentHTML('beforeend', `
    <div id='sorry_message-wrapper'><p id='sorry_message'>Sorry, there are no ${!roomType ? 'room' : roomType}s availabile for a ${date} booking</p></div>
    `)
  } else {
    bookingArray.forEach((room, i) => {
      let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];
      dashboardCustomer.insertAdjacentHTML('beforeend',
      `
      <article id='result_card-${i}' class='result_card fade-in'>
      <div class='result_image-wrapper'>
      <img class='result_image' src=${randomImage}>
      </div>
      <section class='result_text-wrapper'>
      <h2>${room.roomType} #${room.number}</h2>
      <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}, incredible mountain views,
      <br>a fully modern room and bathroom${room.bidet ? ' including a bidet!' : '.'}</p>
      <br>
      <div>
      <p>$${room.costPerNight.toFixed(2)}</p>
      <p>per night<br>excluding taxes and fees</p>
      </div>
      <span><p value='${room.number}' class='result_book-room-link'>BOOK THIS ROOM</p></span>
      </section>
      </article>
      `);
    });
  };
}

// ------------ Dashboard Data ---------------------

function bookRoom() {
  date = getCalendarDate()
  if (event.target.classList.contains('result_book-room-link')) {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.bookMyRoom(date, roomNum, onSuccess);
  }
}

function sortByRoomType() {
  let dropdown = document.querySelector('#room-types');
  let roomType = dropdown.options[dropdown.selectedIndex].value.toString();
  let selectedDate = getCalendarDate();

  if (roomType === 'residential') {
    loadAvailableRooms(selectedDate, 'residential suite');
  } else if (roomType === 'suite') {
    loadAvailableRooms(selectedDate, 'suite');
  } else if (roomType === 'junior') {
    loadAvailableRooms(selectedDate, 'junior suite');
  } else if (roomType === 'single') {
    loadAvailableRooms(selectedDate, 'single room');
  } else if (roomType === 'all') {
    loadAvailableRooms(selectedDate);
  }
}

function getUpdatedAvailableList() {
  fetchedBookingData = apiRequest.getBookingData();
  fetchedBookingData.then(value => {
    bookingData = value['bookings']
  }).then(()=>loadAvailableRooms(date))
}

function returnUserInfo() {
  if (event.key === 'Enter') {
    loadUserAccountInfo(bookingData, 'manager', managerUserSearchInput.value);
  }
}
