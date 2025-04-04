document.getElementById("login-form").addEventListener("submit", loginUser);

function loginUser(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.user) {
                localStorage.setItem("agroUser", JSON.stringify(data.user));
                window.location.href = "dashboard.html";
            } else {
                alert("Login failed: " + (data.message || "Invalid credentials"));
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            alert("Something went wrong. Please try again.");
        });
}

// Replace this inside login.html script
const dummyEmail = "user@example.com";
const dummyPassword = "123456";

if (email === dummyEmail && password === dummyPassword) {
    localStorage.setItem("agroUser", JSON.stringify({
        name: "Test User",
        email
    }));
    window.location.href = "dashboard.html";
} else {
    alert("Login failed");
}