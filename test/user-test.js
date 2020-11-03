import { expect } from 'chai';
import User from '../src/classes/User';
import Booking from '../src/classes/Booking';
import {userSampleData, bookingSampleData, roomSampleData} from "./test-data/sample-data"

describe.only('User class properties and methods', function() {
  let user1;
  let bookingData;
  let roomData;

  beforeEach(() => {
    bookingData = bookingSampleData;
    roomData = roomSampleData;
    user1 = new User(userSampleData[0])
  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User);
  });
  it('should have an id number', function() {
    expect(user1.id).to.equal(55);
  });
  it('should have a name', function() {
    expect(user1.name).to.equal('Scott Fuddlebutts');
  });
  it('should return array of bookings sorted by date', function() {
    expect(user1.viewMyBookings(bookingSampleData)[1].id).to.equal("randomIDnumber3");
    expect(user1.viewMyBookings(bookingSampleData).length).to.equal(4);
  });
  it('should return total spent on all room bookings', function() {
    expect(user1.viewMyTotal(bookingSampleData, roomSampleData)).to.equal(3200.88);
  });
});
