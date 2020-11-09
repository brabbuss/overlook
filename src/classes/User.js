import Booking from './Booking';
import { apiRequest } from './apiRequest';

export default class User {
  constructor(userData = {}) {
    this.id = userData.id || 777;
    this.name = userData.name || 'GUEST';
  }

  bookMyRoom(date, roomNumber, onSuccess) {
    let booking =
    {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
    apiRequest.createBooking(booking, onSuccess)
  }

  viewMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    });
    return myBookings.sort((a,b) => {
      return a.date < b.date ? -1 : 1;
    })
  }

  viewMyTotal(bookingData, roomData) {
    let grandTotal = this.viewMyBookings(bookingData).reduce((myGrandTotal, myBooking) => {
      let matchedRoom = roomData.find(room => room.number === myBooking.roomNumber)
      myGrandTotal += matchedRoom.costPerNight
      return myGrandTotal;
    }, 0).toFixed(2);
    return Number(grandTotal)
  }

  viewUnavailableRooms(bookingData, roomData, date) {
    return bookingData.reduce((bookedRooms, booking) => {
      if (booking.date === date) {
        bookedRooms.push(roomData.find(room => room.number === booking.roomNumber))
      }
      return bookedRooms
    }, []);
  }

  viewAvailableRooms(bookingData, roomData, date) {
    let unavailableRooms = this.viewUnavailableRooms(bookingData, roomData, date);
    return roomData.filter(room => !unavailableRooms.includes(room)); // not empathetic consider rewriting
  }

  viewAvailableRoomsByType(bookingData, roomData, date, roomType) {
    let availableRooms = this.viewAvailableRooms(bookingData, roomData, date);
    if (!roomType) {
      return availableRooms;
    }
    return availableRooms.filter(room => room.roomType === roomType);
  }
}

//TODO when calculating price, use toFixed(2) b/c bad data
/*
Parse past, today, future BOOKINGS by checking against todaysDate
Separate BOOKINGS into past, today, and future dates

Three options to display - past, present, today drawing on one of those
three arrays
?? USER.method on click of ‘past’ or ‘future’ bookings to return from
myBookings array items that are < todaysDate, or > todaysDate
*/
