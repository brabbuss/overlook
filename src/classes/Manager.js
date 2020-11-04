import Booking from './Booking';
import User from './User';
import {apiRequest} from './apiRequest';

export default class Manager extends User {
  constructor(userData) {
    super(userData)
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
  deleteCustomerBooking(bookingID) {
    let booking =
      {
        "id": bookingID
      }
    apiRequest.deleteBooking(booking);
  }
}
