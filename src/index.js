// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

let userData;
let bookingData;
let roomData;
let user = new User()

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
    userData = value[0];
    bookingData = value[1];
    roomData = value[2];
    loadApp();
  })
  .catch(error => console.log(error))

function loadApp() {
  console.log(userData);
}
