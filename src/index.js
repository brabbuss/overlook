// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/hotel-exterior.jpg'
import './images/room-kinfolk.jpg'
console.log('This is the JavaScript entry file - your code begins here.');

let userData;
let bookingData;
let roomData;
let user;

import User from './classes/User';
import Manager from './classes/Manager';
import Booking from './classes/Booking';

import { domObject } from './classes/domObject';
import { apiRequest } from './classes/apiRequest';

const fetchedUserData = apiRequest.getUserData();
const fetchedBookingData = apiRequest.getBookingData();
const fetchedRoomData = apiRequest.getRoomData();

Promise.all([fetchedUserData, fetchedBookingData, fetchedRoomData])
  .then(value => {
    userData = value[0]['users'];
    bookingData = value[1]['bookings'];
    roomData = value[2]['rooms'];
    loadApp();
  })
  .catch(error => console.log(error))

function loadApp() {
  user = new User()
  console.log(user.viewAvailableRooms(bookingData, roomData, "2020/02/10"))
}
