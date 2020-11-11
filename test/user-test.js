const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

import User from '../src/classes/User';
import Booking from '../src/classes/Booking';
import { apiRequest } from '../src/classes/apiRequest';
import { userSampleData, bookingSampleData, roomSampleData } from "./test-data/sample-data"

describe('User class properties and methods', function() {
  let user1, user2;
  let bookingData;
  let roomData;

//FYI spies already exist inside of manager-test and
//seem to be checking for api calls across all tests

  beforeEach(() => {
    bookingData = bookingSampleData;
    roomData = roomSampleData;
    user1 = new User(userSampleData[0])
    user2 = new User()
  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should have a default id number of 777 if none is provided', function() {
    expect(user2.id).to.equal(777);
  });

  it('should have an id number', function() {
    expect(user1.id).to.equal(55);
  });

  it('should have a default name GUEST if none is provided', function() {
    expect(user2.name).to.equal('GUEST');
  });

  it('should have a name', function() {
    expect(user1.name).to.equal('Scott Fuddlebutts');
  });

  it('should return array of bookings sorted by date', function() {
    expect(user1.viewMyBookings(bookingData)[1].id).to.equal("randomIDnumber3");
    expect(user1.viewMyBookings(bookingData).length).to.equal(4);
  });

  it('should return total spent on all room bookings', function() {
    expect(user1.viewMyTotal(bookingData, roomData)).to.equal(3200.88);
  });

  it('should be able to find unavailable rooms by date', function() {
    user2 = new User(userSampleData[1])

    expect(user1.viewUnavailableRooms(bookingData, roomData, "2021/01/03").length).to.equal(2);
    expect(user2.viewUnavailableRooms(bookingData, roomData, "2021/01/03")[0]).to.deep.equal(roomSampleData[3]);
  });

  it('should be able to find available rooms by date', function() {
    expect(user1.viewAvailableRooms(bookingData, roomData, "2021/01/03").length).to.equal(2);
    expect(user1.viewAvailableRooms(bookingData, roomData, "2021/01/03")[0]).to.deep.equal(roomSampleData[1]);
  });

  it('should be able to filter available rooms by type of room', function() {
    expect(user1.viewAvailableRoomsByType(bookingData, roomData, "2021/01/03", 'junior suite')[0].roomType).to.equal('junior suite');
    expect(user1.viewAvailableRoomsByType(bookingData, roomData, "2021/01/03", 'junior suite').length).to.equal(1);
  });

  it('should be able to book a room', function() {
    user1.bookMyRoom("2020/02/03", 1);
    expect(apiRequest.createBooking).to.have.been.called(2); // Needs to be 2 b/c called inside manager-test
    expect(apiRequest.createBooking).to.have.been.called.with({"userID": 55, "date": "2020/02/03", "roomNumber": 1});
  });
  
});
