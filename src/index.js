import './css/base.scss';
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
  roomTypeDropdown,
  managerNavLinks
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

document.addEventListener('click', ()=> console.log(event.target.classList));

document.addEventListener('click', domObject.showLogin);
profileIcon.addEventListener('keypress', domObject.showLogin);
loginButton.addEventListener('click', checkLogin);
logoutButton.addEventListener('click', refreshPage)
navBooking.addEventListener('click', showCustomerDashboard);
managerUserSearchInput.addEventListener('keypress', returnUserInfo);
navCustomerHotel.addEventListener('click', showHomePage);
navCustomerAccount.addEventListener('click', showMyBookings);
navCustomerFindRooms.addEventListener('click', showCustomerDashboard)
dashboardCustomer.addEventListener('click', bookRoom)
managerDashboard.addEventListener('click', bookRoomManager)
toolbarSubmit.addEventListener('click', sortByRoomType)
document.querySelector('#booking-toolbar').addEventListener('click', highlightLink)
managerNavLinks.addEventListener('click', managerClickHandler)
document.querySelector('nav').addEventListener('click', highlightLink) //TODO need click handler to target nav, remove indicuvdual target links, delegate task

// ------------------ scratch pad -------------------


// ------------------ General functions ---------------------

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
  date = '2020/03/03';
  let formattedDate = date.replaceAll('/','-')

  calendarInput.setAttribute('min', formattedDate);
  calendarInput.setAttribute('value', formattedDate);

  // user = new User(userData[3])
  user = new Manager()
  showManagerDashboard()

  //TODO set to normal after testing
  console.log(user, date, 'remember to change this information back');
}

function refreshPage() {
  window.location.reload();
}

function getCalendarDate() {
  return calendarInput.value.replaceAll('-','/')
}

// -------------- Nav links and click handlers ----------------

function managerClickHandler () {
  if (event.target.id === 'nav-manager-history') {
    returnUserInfo()
  } else if (event.target.id === 'nav-manager-booking') {
    showManagerBookForCustomer();
    loadAvailableRooms(date);
  } else if (event.target.id === 'nav-manager-history') {
    showManagerDashboard()
  }
}

function highlightLink() {
  document.querySelectorAll('.highlightable_link').forEach(node => {
    node.classList.remove('active_nav')
  });
  if (event.target.classList.contains('highlightable_link')) {
    event.target.classList.add('active_nav');
  }
}

// ------------- Dashboard Display ------------------

function showMyBookings() {
  loadUserAccountInfo(bookingData);
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
}

function showManagerDashboard() {
  domObject.hideHomeView(true);
  domObject.hideManagerView(false);
  domObject.showToolbar(true);
  domObject.hideElement(document.querySelector('#toolbar_submit_button_wrapper'))
  domObject.hideElement(roomTypeDropdown)
  domObject.hideElement(calendar)
  showManagerWelcomeMessage()
  updateManagerStats()
  // domObject.showCustomerDashboard(false);
}

function showManagerBookForCustomer() {
  domObject.showElement(document.querySelector('#toolbar_submit_button_wrapper'))
  domObject.showElement(roomTypeDropdown)
  domObject.showElement(calendar)
}

function updateManagerStats(customerName) {
  document.querySelector('#sidebar_manager_stats').classList.remove('hidden');
  document.querySelector('#manager_stat_title_date').innerText = `${date}`
  document.querySelector('#manager_stat_availability').innerText = `${user.totalAvailableRooms(bookingData, roomData, date)} vacancies`
  document.querySelector('#manager_stat_total_revenue').innerText = `$${user.totalRevenue(bookingData, roomData, date).toFixed()}`
  document.querySelector('#manager_stat_total_occupancy').innerText = `${user.totalPercentOccupied(bookingData, roomData, date)*100}%`;
  if (customerName) {
    document.querySelector('#manager_stat_customer_total_wrapper').innerHTML ='';
    document.querySelector('#manager_stat_customer_total_wrapper').insertAdjacentHTML('beforeend', `
      <p>CUSTOMER TOTAL</p>
      <p id='manager_stat_customer_total' class='stat_gold'>$${user.viewCustomerInfo(bookingData, roomData, userData, customerName).totalSpent.toFixed()}</p>
    `)
  }
}

function showManagerWelcomeMessage() {
  managerDashboard.innerHTML = ''
  let roomsToRent = user.totalAvailableRooms(bookingData, roomData, getCalendarDate())
  console.log(roomsToRent);
  managerDashboard.insertAdjacentHTML('beforeend', `
  <div id='manager_welcome-wrapper'><p id='manager_welcome'>Hey Boss! We've got ${!roomsToRent ? 'nothing' : roomsToRent + ' rooms'} availabile to book today!</p></div>
  `)
}

function showHomePage() {
  domObject.hideHomeView(false)
  domObject.showToolbar(false);
}

function getCorrectDashAndBooking(bookingData, name) {
  let customerOrManager = user instanceof Manager ? 'manager' : 'customer';
  let dashboard = customerOrManager === 'manager' ? managerDashboard : dashboardCustomer;
  let bookings = customerOrManager === 'manager' ? user.viewCustomerBookings(bookingData, userData, name) : user.viewMyBookings(bookingData);
  return [dashboard, bookings]
}

function loadUserAccountInfo(bookingData, name) {
  let dashboardAndBookings = getCorrectDashAndBooking(bookingData, name);
  dashboardAndBookings[0].innerHTML = ''
  dashboardAndBookings[1].forEach((booking, i) => {
    let room = roomData.find(room => room.number === booking.roomNumber)
    let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];
    dashboardAndBookings[0].insertAdjacentHTML('beforeend',
    `
    <article id='my-booking_card-${i}' class='my-booking_card'>
    <div class='my-booking_image-wrapper'>
    <img class='my-booking_image' src=${randomImage}>
    </div>
    <section class='my_booking-text_wrapper'>
    <div>
    <p>room details</p>
    <p>${room.roomType}</p>
    <p>room no: ${room.number}</p>
    <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}</p>
    <p>${room.bidet ? 'amenities: <br>bidet' : ''}</p>
    </div>
    <div>
    <p>booking details</p>
    <p>${name ? name : user.name}</p>
    <p>for: ${booking.date}</p>
    <p>customer id: ${booking.userID}</p>
    <p>booking id:</p>
    <p>${booking.id}</p>
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
  let dashboardAndBookings = getCorrectDashAndBooking(bookingData, name);
  let bookingArray = user.viewAvailableRoomsByType(bookingData, roomData, date, roomType);
  dashboardAndBookings[0].innerHTML = ''
  if (bookingArray.length === 0) {
    dashboardAndBookings[0].insertAdjacentHTML('beforeend', `
    <div id='sorry_message-wrapper'><p id='sorry_message'>Sorry, there are no ${!roomType ? 'room' : roomType}s availabile for a ${date} booking</p></div>
    `)
  } else {
    bookingArray.forEach((room, i) => {
      let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];
      dashboardAndBookings[0].insertAdjacentHTML('beforeend',
      `
      <article id='result_card-${i}' class='result_card fade-in'>
      <div class='result_image-wrapper'>
      <img class='result_image' src=${randomImage} alt='A ${room.numBeds} bed, calm and serene modern ${room.roomType}'>
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
      <span><p id='book_room_link' value='${room.number}' class='result_book-room-link'>BOOK THIS ROOM</p></span>
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

function bookRoomManager() {
  date = getCalendarDate()
  console.log(event.target.classList.contains('result_book-room-link'));
  let name = managerUserSearchInput.value;
  if (event.target.classList.contains('result_book-room-link') && name !== '') {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.addCustomerBooking(userData, name, date, roomNum, onSuccess);
  } else if (event.target.id === 'book_room_link' && name === '') {
    alert('Please first select a user by their first and last name in the toolbar')
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
  }).then(()=>loadAvailableRooms(date)).then(()=> {
    if (user instanceof Manager) {
      updateManagerStats(managerUserSearchInput.value)
    }
  })
}

function returnUserInfo() {
  if (event.key === 'Enter') {
    loadUserAccountInfo(bookingData, managerUserSearchInput.value);
    updateManagerStats(managerUserSearchInput.value)
    navManagerHistory.classList.add('active_nav')
  } else if (managerUserSearchInput.value) {
    loadUserAccountInfo(bookingData, managerUserSearchInput.value);
    updateManagerStats(managerUserSearchInput.value)
    navManagerHistory.classList.add('active_nav')
  } else {
    navManagerHistory.classList.add('active_nav')
  }
}
