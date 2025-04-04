// script.js

// Show proper nav links on home page
window.onload = () => {
    const nav = document.getElementById('navLinks');
    if (nav) {
      const user = localStorage.getItem('username');
      if (user) {
        nav.innerHTML = `
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html"><img src="assets/profile-icon.png" alt="Profile" style="height:24px;"></a></li>
        `;
      } else {
        nav.innerHTML = `
          <li><a href="index.html">Home</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="signup.html">Sign Up</a></li>
        `;
      }
    }
  
    const profileName = document.getElementById("profileName");
    if (profileName) {
      profileName.innerText = localStorage.getItem("username") || "User";
    }
  };
  
  function loginUser(e) {
    e.preventDefault();
    const uname = document.getElementById("loginUsername").value;
    const pwd = document.getElementById("loginPassword").value;
  
    const storedU = localStorage.getItem("username");
    const storedP = localStorage.getItem("password");
  
    if (uname === storedU && pwd === storedP) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials!");
    }
    return false;
  }
  
  function signupUser(e) {
    e.preventDefault();
    const uname = document.getElementById("signupUsername").value;
    const pwd = document.getElementById("signupPassword").value;
  
    localStorage.setItem("username", uname);
    localStorage.setItem("password", pwd);
  
    alert("Account created! Logging you in...");
    window.location.href = "index.html";
    return false;
  }
  
  function logoutUser() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert("Logged out!");
    window.location.href = "index.html";
  }
  