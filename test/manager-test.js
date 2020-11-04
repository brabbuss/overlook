import { expect } from 'chai';
import User from '../src/classes/User';
import Manager from '../src/classes/Manager';
import Booking from '../src/classes/Booking';
import {userSampleData, bookingSampleData, roomSampleData} from "./test-data/sample-data"

describe.only('Manager class properties and methods', function() {
  let manager, bookingData, roomData, userData;

  beforeEach(() => {
    bookingData = bookingSampleData;
    roomData = roomSampleData;
    userData = userSampleData;
    manager = new Manager();
  })

  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });
  it('should be an instance of Manager', function() {
    expect(manager).to.be.an.instanceof(Manager);
  });
  it('should have an id number of 777', function() {
    expect(manager.id).to.equal(777);
  });
  it('should have a name MANAGER', function() {
    expect(manager.name).to.equal('MANAGER');
  });
  it('should show total rooms available by date', function() {
    expect(manager.totalAvailableRooms(bookingData, roomData, "2022/04/21")).to.equal(4);
  });
  it('should return total revenue from today\'s bookings', function() {
    expect(manager.totalRevenue(bookingData, roomData, "2021/01/01")).to.equal(1000.44);
  });
  it('should return percent of occupied rooms for given date', function() {
    expect(manager.totalPercentOccupied(bookingData, roomData, "2021/01/01")).to.equal((.50).toFixed(2));
  });
  it('should be able to find a User class object by name', function() {
    expect(manager.viewCustomer(userData, "Scott Fuddlebutts")).to.deep.equal(userData[0]);
    expect(manager.viewCustomer(userData, "Scott Fuddlebutts")).to.be.an.instanceof(User);
  });
  it('should be able to view user\'s bookings and total spent', function() {
    expect(manager.viewCustomerInfo(userData, "Scott Fuddlebutts")).to.deep.equal(userData[0]);
    expect(manager.viewCustomerInfo(userData, "Scott Fuddlebutts")).to.be.an.instanceof(User);
  });

  // it('should be able to find unavailable rooms by date', function() {
  //   user2 = new Manager(userSampleData[1])
  //
  //   expect(manager.viewUnavailableRooms(bookingData, roomData, "2021/01/03").length).to.equal(2);
  //   expect(user2.viewUnavailableRooms(bookingData, roomData, "2021/01/03")[0]).to.deep.equal(roomSampleData[3]);
  // });
  // it('should be able to find available rooms by date', function() {
  //   expect(manager.viewAvailableRooms(bookingData, roomData, "2021/01/03").length).to.equal(2);
  //   expect(manager.viewAvailableRooms(bookingData, roomData, "2021/01/03")[0]).to.deep.equal(roomSampleData[1]);
  // });
  // it('should be able to filter available rooms by type of room', function() {
  //   expect(manager.viewAvailableRoomsByType(bookingData, roomData, "2021/01/03", 'junior suite')[0].roomType).to.equal('junior suite');
  //   expect(manager.viewAvailableRoomsByType(bookingData, roomData, "2021/01/03", 'junior suite').length).to.equal(1);
  // });
  // it('should be able to book a room', function() {
  //
  //   manager.bookMyRoom("2020/02/04", 1)
  //   manager.bookMyRoom("2020/02/05", 2)
  //
  //   expect(manager.bookMyRoom("2020/02/03", 1)).to.be.an.instanceof(Booking);
  //   expect(manager.bookMyRoom("2020/02/03", 1).userID).to.equal(55);
  // });
});
