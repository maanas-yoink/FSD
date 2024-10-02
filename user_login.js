document.addEventListener("DOMContentLoaded", function() {
    // CAPTCHA generation
    const captchaCanvas = document.getElementById('captchaCanvas');
    const ctx = captchaCanvas.getContext('2d');
    let captchaText = '';

    function generateCaptcha() {
        captchaText = Math.random().toString(36).substring(2, 8);
        ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.font = '20px Arial';
        ctx.fillStyle = '#8e1e38';
        ctx.fillText(captchaText, 10, 25);
    }

    document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);
    generateCaptcha(); // Initial CAPTCHA generation

    // Form submission handling
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredCaptcha = document.getElementById('captchaInput').value;

        if (enteredCaptcha !== captchaText) {
            alert('Incorrect CAPTCHA, please try again.');
        } else {
            alert('Login successful!');
            window.location.href = 'user_landingpage.html'; // Redirect after successful login
        }
    });
});
