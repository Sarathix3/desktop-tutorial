const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    // Demo credentials
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
});

