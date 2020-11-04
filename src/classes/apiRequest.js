const apiRequest = {
  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.userData)
      .catch(error => console.log(error));
  },

  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.roomData)
      .catch(error => console.log(error));
  },

  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookingData)
      .catch(error => console.log(error));
  },

  createBooking(booking) {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking),
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  deleteBooking(id) {
    fetch('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  }
};

export default apiRequest;
