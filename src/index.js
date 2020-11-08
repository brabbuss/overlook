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

let userData;
let bookingData;
let roomData;
let user;
let date = '2020/01/15';

import User from './classes/User';
import Manager from './classes/Manager';
import Booking from './classes/Booking';

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
  managerUserSearchInput
} from './classes/domObject';

import { apiRequest } from './classes/apiRequest';

const fetchedUserData = apiRequest.getUserData();
const fetchedBookingData = apiRequest.getBookingData();
const fetchedRoomData = apiRequest.getRoomData();


// ------------------ event listeners ------------------

profileIcon.addEventListener('click', domObject.showLogin);
loginButton.addEventListener('click', checkLogin);
logoutButton.addEventListener('click', refreshPage)
navBooking.addEventListener('click', showCustomerDashboard);
navCustomerHotel.addEventListener('click', showHomePage);
managerUserSearchInput.addEventListener('keypress', returnUserInfo);
navCustomerAccount.addEventListener('click', showMyBookings);
// navManagerHotel.addEventListener('click', domObject.showHomePageManager);

// ------------------ functions ---------------------

Promise.all([fetchedUserData, fetchedBookingData, fetchedRoomData])
  .then(value => {
    userData = value[0]['users'];
    bookingData = value[1]['bookings'];
    roomData = value[2]['rooms'];
    loadApp();
  })
.catch(error => console.log(error))

function loadApp() {
  user = new User(userData[0])
  //TODO delete this shit
  console.log(user, date, 'remember to change this information back');
}

function refreshPage() {
  window.location.reload();
}

function showMyBookings() {
  clearDashboard();
  loadUserBookings();
}

// ------------------ display calls and helper functions ---------------------

function clearDashboard(type) {
  dashboardCustomer.innerHTML = '';
  // managerDashboard.innerHTML = '';
  mainContentContainer.innerHTML = '';
}

function showCustomerDashboard() {
  domObject.showCustomerDashboard(true);
  domObject.showToolbar(true);
  domObject.hideElement(managerUserSearch);
  loadBookings(date);
}

function showManagerDashboard() {
  domObject.hideHomeView(true);
  domObject.hideManagerView(false);
  domObject.showToolbar(true);
  // domObject.showCustomerDashboard(false);
}

function showHomePage() {
  domObject.hideHomeView(false)
}
function returnUserInfo() {
  if (event.key === 'Enter') {
    console.log(user);
    console.log(user.viewCustomerInfo(bookingData, roomData, userData, managerUserSearchInput.value))
  }
}
// ------------ log in ---------------------

function checkLogin() {
  let usernamePre = usernameInput.value.split('').slice(0,8).join('').toLowerCase()
  let userID = username.value.split('').slice(8).join('')
  let password = passwordInput.value.toString()
  if (password === 'overlook2020' && usernamePre === 'customer' && userID.length > 0) {
    user = new User(userData[userID-1])
    showCustomerDashboard()
  } else if (password === 'overlook2020' && usernameInput.value.toLowerCase() === 'manager') {
    user = new Manager()
    showManagerDashboard()
  } else {
    alert('Invalid login information')
  }
  domObject.showLogin()
  event.preventDefault()
}




function loadUserBookings(date) {
  dashboardCustomer.innerHTML = ''
  user.viewMyBookings(bookingData).forEach((booking, i) => {
    let room = roomData.find(room => room.number === booking.roomNumber)
    let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];

    dashboardCustomer.insertAdjacentHTML('beforeend',
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
          <p>booked by: ${user.name}</p>
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

function loadBookings(date) {
  user.viewAvailableRooms(bookingData, roomData, date).forEach((room, i, availRooms) => {

    let randomImage = roomImages[Math.floor(Math.random() * roomImages.length)];

    document.querySelector('#dashboard-customer').insertAdjacentHTML('beforeend',
    `
    <article id='result_card-${i}' class='result_card'>
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
        <span><p class='result_text-link'>BOOK THIS ROOM</p></span>
      </section>
    </article>
    `);
  });
  }

// <!-- <article id='result_card-1' class='result_card'>
//   <div class='result_image-wrapper'>
//     <img class='result_image' src='./images/hotel-exterior.jpg'>
//   </div>
//   <section class='result_text-wrapper'>
//     <h2>the residential suite</h2>
//     <p>2 queen beds, incredible mountain vies,<br>and a bidet to shoot water in your asshole</p>
//     <br>
//     <div>
//       <p>$145</p>
//       <p>per night<br>excluding taxes and fees</p>
//     </div>
//     <span><p class='result_text-link'>BOOK THIS ROOM</p></span>
//   </section>
// </article> -->
