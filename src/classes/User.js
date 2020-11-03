export default class User {
  constructor(userData) {
    this.id = userData.id
    this.name = userData.name
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
      let myTotal = roomData.reduce((myTotal, room) => {
        if (room.number === myBooking.roomNumber) {
          myTotal += room.costPerNight;
        }
        return myTotal;
      }, 0)
      myGrandTotal += myTotal
      return myGrandTotal;
    }, 0).toFixed(2);
    return Number(grandTotal)
  }
}
//TODO when calculating price, use toFixed(2) b/c bad data
/*
Parse past, today, future BOOKINGS by checking against todaysDate
Separate BOOKINGS into past, today, and future dates

Three options to display - past, present, today drawing on one of those three arrays
?? USER.method on click of ‘past’ or ‘future’ bookings to return from myBookings array items that are < todaysDate, or > todaysDate

*/
