document.addEventListener("DOMContentLoaded", function () {
    // 🚀 Smooth Page Transitions
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease-in-out";
        document.body.style.opacity = "1";
    }, 100);

    // 🚀 Signup Form Validation
    const signupForm = document.querySelector("form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting

            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (username === "" || email === "" || password === "" || confirmPassword === "") {
                showToast("⚠️ All fields are required!", "error");
                return;
            }

            if (password !== confirmPassword) {
                showToast("⚠️ Passwords do not match!", "error");
                return;
            }

            showToast("✅ Sign-up successful! Redirecting...", "success");
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect after signup
            }, 1500);
        });
    }

    // 🚀 Demo Account Simulation
    const demoButton = document.querySelector(".btn-demo");
    if (demoButton) {
        demoButton.addEventListener("click", function () {
            showToast("🔓 Demo account activated! Enjoy full access.", "info");
            setTimeout(() => {
                window.location.href = "demo.html";
            }, 1000);
        });
    }

    // 🚀 Navigation Click Animation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });

    // 🚀 Toast Notification Function (For Feedback Messages)
    function showToast(message, type) {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }
});
