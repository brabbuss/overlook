export const domObject = {
  showLogin() {
    usernameInput.value = '';
    passwordInput.value = '';
    loginBox.classList.contains('hidden') ? loginBox.classList.remove('hidden') : loginBox.classList.add('hidden');
    // TODO animate pop up modal
  },

  showHomePage() {
    domObject.hideHomeView(false);
    domObject.hideCustomerView(true);
  },

  showHomePageManager() {
    domObject.hideHomeView(false);
    domObject.hideManagerView(true);
  },

  showCustomerDashboard() {
    domObject.hideHomeView(true);
    domObject.hideCustomerView(false);
  },

  hideHomeView(boolean) {
    boolean ? domObject.hideElement(homeNavLinks) : domObject.showElement(homeNavLinks);
    boolean ? domObject.hideElement(mainIntro) : domObject.showElement(mainIntro);
    boolean ? domObject.hideElement(mainRoomTypes) : domObject.showElement(mainRoomTypes);
  },

  hideCustomerView(boolean) {
    boolean ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
  },

  hideManagerView(boolean) {
    boolean ? domObject.hideElement(managerNavLinks) : domObject.showElement(managerNavLinks)
  },

  hideGuestView(boolean) {
    boolean ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
  },

  showElement(element) {
    element.classList.remove('hidden')
  },

  hideElement(element) {
    element.classList.add('hidden')
  }
};

export const profileIcon = document.querySelector('#Layer_1');
export const loginBox = document.querySelector('.login');
export const loginButton = document.querySelector('#submit-login')
export const usernameInput = document.querySelector('#username')
export const passwordInput = document.querySelector('#password')
export const navBooking  = document.querySelector('#nav-booking')
export const navRooms = document.querySelector('#nav-rooms')
export const navContact = document.querySelector('#nav-contact')
export const navManagerHotel = document.querySelector('#nav-manager-hotel')
export const navManagerBooking = document.querySelector('#nav-manager-booking')
export const navManagerHistory = document.querySelector('#nav-manager-history')
export const navCustomerFindRooms = document.querySelector('#nav-customer-find-rooms')
export const navCustomerRooms = document.querySelector('#nav-customer-rooms')
export const navCustomerHotel = document.querySelector('#nav-customer-hotel')
export const homeNavLinks = document.querySelector('#home-nav-links')
export const managerNavLinks = document.querySelector('#manager-nav-links')
export const customerNavLinks = document.querySelector('#customer-nav-links')
export const mainRoomTypes = document.querySelector('#main_room-types')
export const mainIntro = document.querySelector('#main_intro')
// export const  = document.querySelector('#')
// export const  = document.querySelector('#')
// export const  = document.querySelector('#')
// export const  = document.querySelector('#')
