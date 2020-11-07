export const domObject = {
  loginClick() {
    usernameInput.value = '';
    passwordInput.value = '';
    loginBox.classList.contains('hidden') ? loginBox.classList.remove('hidden') : loginBox.classList.add('hidden');
  }
};

export const profileIcon = document.querySelector('#Layer_1');
export const loginBox = document.querySelector('.login');
export const loginButton = document.querySelector('#submit-login')
export const usernameInput = document.querySelector('#username')
export const passwordInput = document.querySelector('#password')
