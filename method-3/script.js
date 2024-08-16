document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const confirmContinueButton = document.getElementById("confirmContinueButton");
    const cancelButton = document.getElementById("cancelButton");
    const targetArea = document.getElementById("targetArea");
    const targetAreaConfirmed = document.getElementById("targetAreaConfirmed");
    const modal = document.getElementById("modal");
    const customCursor = document.getElementById("customCursor");

    let isTargetHovered = false;

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        modal.classList.remove("hidden");
        modal.classList.add("active");
        document.body.classList.add("modal-active");
        customCursor.style.display = "block";
        modal.style.display = "flex";
    });

    document.addEventListener("mousemove", function (event) {
        if (modal.classList.contains("active")) {
            customCursor.style.left = `${event.clientX}px`;
            customCursor.style.top = `${event.clientY}px`;
        }
    });

    targetArea.addEventListener("click", function () {
        isTargetHovered = true;
        confirmContinueButton.removeAttribute("disabled");

        modal.classList.remove("active");
        targetArea.classList.add("hidden");
        targetAreaConfirmed.classList.remove("hidden");
        document.body.classList.remove("modal-active");
        customCursor.style.display = "none";
    });

    confirmContinueButton.addEventListener("click", function () {
        alert('Login successful!');
        window.location.href = 'https://www.youtube.com/@CodingWithLewis';
    });

    cancelButton.addEventListener("click", function () {
        modal.classList.add("hidden");
        modal.classList.remove("active");
        document.body.classList.remove("modal-active");
        customCursor.style.display = "none";
    });
});
