const signupLink = document.querySelector('#signup-link');
const loginLink = document.querySelector('#login-link');
const signupFormContainer = document.querySelector('.form-container__signup');
const loginFormContainer = document.querySelector('.form-container__login');

signupLink.addEventListener('click', () => {
	signupFormContainer.classList.remove('hide');
	loginFormContainer.classList.add('hide');
});

loginLink.addEventListener('click', () => {
	signupFormContainer.classList.add('hide');
	loginFormContainer.classList.remove('hide');
});
