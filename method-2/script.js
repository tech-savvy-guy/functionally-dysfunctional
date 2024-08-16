document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const correctPassword = 'FunctionallyDysfunctional';

    if (password !== correctPassword) {
        errorMessage.classList.remove("hidden");
        errorMessage.innerHTML = `<i class="uil uil-info-circle"></i><div>Here, you probably forgot what your password is.<br>It is: <b>${correctPassword}!</b></div>`;
        return;
    }
    
    errorMessage.classList.add("hidden");
    errorMessage.textContent = '';
    alert('Login successful!');
    window.location.href = 'https://www.youtube.com/@CodingWithLewis';
});
