document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('signup-container').style.opacity = '1';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
