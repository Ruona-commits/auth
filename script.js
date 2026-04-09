
const authScreen = document.getElementById('auth-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const tabLogin = document.getElementById('tab-login');
const tabSignup = document.getElementById('tab-signup');
const logoutBtn = document.getElementById('logout-btn');

if (localStorage.getItem('userEmail')) {
    authScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');
    const savedEmail = localStorage.getItem('userEmail');
    document.getElementById('welcome-message').innerText
        = "Hello," + savedEmail;
};



tabLogin.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden')
    tabLogin.classList.add('active-tab');
    tabSignup.classList.remove('active-tab');
});

tabSignup.addEventListener('click', () => {

    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    tabSignup.classList.add('active-tab');
    tabLogin.classList.remove('active-tab');
});


logoutBtn.addEventListener('click', () => {
    authScreen.classList.remove('hidden');
    dashboardScreen.classList.add('hidden');
    loginForm.reset();
    signupForm.reset();

});

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (password.length < 6) {
        alert("password is too short ! it must be at least 6 characters")
    } else {
        alert("signup successful! ");

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        signupForm.reset();
    }

});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');


    if (email === savedEmail && password === savedPassword) {
        authScreen.classList.add('hidden');
        dashboardScreen.classList.remove('hidden');
        document.getElementById('welcome-message').innerText
            = "Hello," + email;

    }
    else {
        alert("invalid email or password");
    }
});