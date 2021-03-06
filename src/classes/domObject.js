export const domObject = {
  showLogin() {
    if (event.target.id === 'Layer_1' || event.target === 'svg' || event.target.classList.contains('main-card_text-link')) {
      usernameInput.value = '';
      passwordInput.value = '';
      loginBox.classList.contains('hidden') ? loginBox.classList.remove('hidden') : loginBox.classList.add('hidden');
    }
  },

  showToolbar(boolean) {
    boolean === true ? domObject.showElement(managerUserSearch) : domObject.hideElement(managerUserSearch);
    boolean === true ? domObject.showElement(bookingToolbar) : domObject.hideElement(bookingToolbar);
  },

  showToolbarCustomerHistory() {
    domObject.showToolbar(true);
    domObject.hideElement(document.querySelector('#toolbar_submit_button_wrapper'))
    domObject.hideElement(roomTypeDropdown)
    domObject.hideElement(calendar)
  },

  showDashboardHeader(boolean) {
    boolean === true ? domObject.showElement(dashboardHeader) : domObject.hideElement(dashboardHeader);
  },

  showHomePageManager() {
    domObject.hideHomeView(false);
    domObject.hideManagerView(true);
    domObject.hideCustomerView(true);
  },

  showCustomerDashboard(boolean) {
    boolean === true ? domObject.hideHomeView(true) : domObject.hideHomeView(false);
    boolean === true ? domObject.hideCustomerView(false) : domObject.hideCustomerView(true);
  },

  hideHomeView(boolean) {
    boolean === true ? domObject.hideElement(homeNavLinks) : domObject.showElement(homeNavLinks);
    boolean === true ? domObject.hideElement(mainContentContainer) : domObject.showElement(mainContentContainer);
    domObject.hideCustomerView(true);
    domObject.showDashboardHeader(false);
  },

  hideCustomerView(boolean) {
    boolean === true ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
    boolean === true ? domObject.hideElement(dashboardCustomer) : domObject.showElement(dashboardCustomer)
  },

  hideManagerView(boolean) {
    boolean === true ? domObject.hideElement(managerNavLinks) : domObject.showElement(managerNavLinks);
    !boolean === true ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
    boolean === true ? domObject.hideElement(managerDashboard) : domObject.showElement(managerDashboard)
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
export const navCustomerAccount = document.querySelector('#nav-customer-account')
export const navCustomerHotel = document.querySelector('#nav-customer-hotel')
export const homeNavLinks = document.querySelector('#home-nav-links')
export const managerNavLinks = document.querySelector('#manager-nav-links')
export const customerNavLinks = document.querySelector('#customer-nav-links')
export const mainRoomTypes = document.querySelector('#main_room-types')
export const mainIntro = document.querySelector('#main_intro')
export const calendar = document.querySelector('#calendar')
export const calendarInput = document.querySelector('#calendar-input')
export const managerUserSearch = document.querySelector('#manager-lookup-bar')
export const bookingToolbar = document.querySelector('#booking-toolbar')
export const logoutButton = document.querySelector('#logout-button')
export const dashboardCustomer = document.querySelector('#dashboard-customer')
export const managerDashboard = document.querySelector('#dashboard-manager')
export const mainContentContainer = document.querySelector('#main-content-container')
export const managerUserSearchInput = document.querySelector('#manager-search-user-input')
export const dashboardHeader = document.querySelector('#dashboard_header')
export const toolbarSubmit = document.querySelector('#toolbar_submit_button')
export const roomTypeDropdown = document.querySelector('#room-type-dropdown-container')
export const customerStats = document.querySelector('#sidebar_customer_stats')
