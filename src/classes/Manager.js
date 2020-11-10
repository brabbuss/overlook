import Booking from './Booking';
import User from './User';
import { apiRequest } from './apiRequest';

export default class Manager extends User {
  constructor(userData) {
    super(userData)
    this.id = 0;
    this.name = 'MANAGER'
  }
  totalAvailableRooms(bookingData, roomData, date) {
    return this.viewAvailableRooms(bookingData, roomData, date).length
  }
  totalRevenue(bookingData, roomData, date) {
    return Number(this.viewUnavailableRooms(bookingData, roomData, date)
    .reduce((totalRevenue, room) => {
      totalRevenue += room.costPerNight;
      return totalRevenue
    }, 0).toFixed(2))
  }
  totalPercentOccupied(bookingData, roomData, date) {
    return (this.viewUnavailableRooms(bookingData, roomData, date).length /
    roomData.length).toFixed(2)
  }
  viewCustomer(userData, name) {
    return new User(userData.find(user => user.name === name))
  }
  viewCustomerBookings(bookingData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    return customer.viewMyBookings(bookingData);
  }
  viewCustomerInfo(bookingData, roomData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    let bookings = customer.viewMyBookings(bookingData);
    let total = customer.viewMyTotal(bookingData, roomData);
    return {id: customer.id, name: customer.name, bookingHistory: bookings, totalSpent: total}
  }
  addCustomerBooking(userData, name, date, roomNumber) { //TDD see if API call is made
    let customer = this.viewCustomer(userData, name);
    return customer.bookMyRoom(date, roomNumber);
  }
  deleteCustomerBooking(bookingData, bookingID) {
    let matchedBooking = bookingData.find(booking => booking.id === bookingID);
    if (!matchedBooking) {
      console.log(`Cannot find booking id: ${bookingID}`);
      return `Cannot find booking id: ${bookingID}`
    } else if (matchedBooking && matchedBooking.date > this.getDate()) {
      let booking =
        {
          "id": bookingID
        }
      apiRequest.deleteBooking(booking);
    } else {
      console.log(`Cannot delete bookings on or before today\'s date: ${this.getDate()}`);
      return `Cannot delete bookings on or before today\'s date: ${this.getDate()}`
    }
  }
  getDate() {
    let newDate = new Date();
    let month = newDate.getMonth()+1;
    let date = newDate.getDate();

    if (date.toString().length < 2) {
      date = '0' + date
    }
    if (month.toString().length < 2) {
      month = '0' + month
    }
    return `${newDate.getFullYear()}/${month}/${date}`
  }

}
