// Function to redirect to login page
function redirectToLogin() 
{
    window.location.href = 'login.html';
}

// Function to toggle the dropdown menu
function toggleMenu() {
    var menu = document.getElementById('dropdown-menu');
    if (menu.style.display === 'none' || menu.style.display === '')
        {
        menu.style.display = 'block';
    } else 
    {
        menu.style.display = 'none';
    }
}

// Event listener to close the dropdown menu when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

// Function to check if a user is logged in
function checkLogin() {
    var userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('user-name').textContent = userName;
        document.querySelector('.login').style.display = 'none';
    } else {
        document.getElementById('user-name').textContent = '';
    }
}

// Function to log out the user
function logout() {
    localStorage.removeItem('userName');
    window.location.href = 'login.html';
}

// Event listener to handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            localStorage.setItem('userName', name);
            window.location.href = 'mainpage.html';
        });
    }

    var logoutLink = document.querySelector('#dropdown-menu a#logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            logout();
        });
    }
});
