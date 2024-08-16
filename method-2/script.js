document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const correctPassword = 'FunctionallyDysfunctional';

    if (password !== correctPassword) {
        errorMessage.classList.remove("hidden");
        errorMessage.innerHTML = `<i class="uil uil-times-circle"></i><div>Incorrect Password! Try again!</div>`;
        return;
    }
    
    errorMessage.classList.add("hidden");
    errorMessage.textContent = '';
    alert('Login successful!');
    window.location.href = 'https://www.youtube.com/@CodingWithLewis';
});

luckyButton = document.getElementById('feelingLuckyButton');

luckyButton.addEventListener('click', function() {
    document.getElementById('loginFormContainer').classList.add("hidden");
    document.getElementById('randomUserContainer').classList.remove("hidden");
});

document.getElementById('goBackButton').addEventListener('click', function() {
    document.getElementById('randomUserContainer').classList.add("hidden");
    document.getElementById('loginFormContainer').classList.remove("hidden");
});

document.getElementById('continueButton').addEventListener('click', function() {
    alert('Login successful!');
    window.location.href = 'https://www.youtube.com/@CodingWithLewis';
});
