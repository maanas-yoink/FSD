document.addEventListener("DOMContentLoaded", function() {
    // Set max date for the date of birth input to today's date
    const dobInput = document.getElementById('dob');
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    // Format the date as YYYY-MM-DD
    const maxDate = yyyy + '-' + mm + '-' + dd;
    dobInput.setAttribute('max', maxDate);
    
    // Existing event listener for the signup form
    const form = document.querySelector(".signup-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.querySelector('input[placeholder="Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
        const dob = dobInput.value; // Get value from the dob input
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        // Reset all input borders
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.style.borderColor = ""; // Reset border color
        });

        // Validation
        let isValid = true;

        if (name.trim() === "") {
            alert("Name cannot be empty."); // Alert for empty name
            document.querySelector('input[placeholder="Name"]').style.borderColor = "red"; // Highlight in red
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address."); // Alert for invalid email
            document.querySelector('input[placeholder="Email"]').style.borderColor = "red"; // Highlight in red
            isValid = false;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Mobile number must be 10 digits."); // Alert for invalid mobile number
            document.querySelector('input[placeholder="Mobile Number"]').style.borderColor = "red"; // Highlight in red
            isValid = false;
        }

        if (dob === "") {
            alert("Date of Birth cannot be empty."); // Alert for empty DOB
            dobInput.style.borderColor = "red"; // Highlight in red
            isValid = false;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.'); // Alert for short password
            document.getElementById('password') // Highlight in red
            isValid = false;
        }
        else if (!passwordRegex.test(password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'); // Alert for invalid password format
            document.getElementById('password')  // Highlight in red
            isValid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.'); // Alert for mismatched passwords
            document.getElementById('confirm-password').style.borderColor = "red"; // Highlight in red
            isValid = false;
        }

        // Check if gender is selected
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        if (!genderSelected) {
            alert('Please select your gender.'); // Alert for no gender selected
            isValid = false; // Mark as invalid if no gender is selected
        }

        // If all validations passed
        if (isValid) {
            alert('Signup successful! Redirecting...');
            window.location.href = "user_login.html"; // Change this to the page you want to redirect to
        }
    });
});
