import { expect } from 'chai';
import Booking from '../src/classes/Booking';
import {bookingSampleData, roomSampleData} from "./test-data/sample-data"

describe('Booking class properties and methods', function() {
  let booking1, booking2, booking3;

  beforeEach(() => {
    booking1 = new Booking(bookingSampleData[0]);
    booking2 = new Booking(bookingSampleData[1]);
    booking3 = new Booking(bookingSampleData[2]);
  })

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });
  
  it('should be an instance of Booking', function() {
    expect(booking1).to.be.an.instanceof(Booking);
  });

  it('should have a unique booking id number', function() {
    expect(booking1.id).to.equal("randomIDnumber1");
  });

  it('should have a booking date', function() {
    expect(booking1.date).to.equal("2019/04/20");
  });

  it('should have a room number associated with the booking', function() {
    expect(booking1.roomNumber).to.equal(1);
  });

  it('should have an array of room service charges whose default is an empty array', function() {
    expect(booking1.roomServiceCharges).to.deep.equal([]);
  });
});
