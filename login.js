function toggleForm() {
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");
    let title = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        title.innerText = "Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        title.innerText = "Sign Up";
    }
}

function showLogin(userType) {
    let title = document.getElementById("form-title");

    if (userType === "admin") {
        title.innerText = "Login";
    } else {
        title.innerText = "Worker Login";
    }
}

document.getElementById("loginBtn").addEventListener("click", function() {
    window.location.href = "dash.html"; // Replace with your actual dashboard file
});

