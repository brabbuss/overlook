export const apiRequest = {
  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  createBooking(booking, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => {
        onSuccess()
        console.log("Booking successfully CREATED")
      })
      .catch(error => console.log(error, "Encountered an error"))
  },

  deleteBooking(booking, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => {
        onSuccess()
        console.log("Booking successfully DELETED")
      })
      .catch(error => console.log(error, "Encountered an error"))
  }
};
