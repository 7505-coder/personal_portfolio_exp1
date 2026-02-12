// Button Click Alert
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

// Contact Form Submission
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    formMessage.textContent = "Thank you! Your message has been received.";
    formMessage.style.color = "green";

    form.reset();
});
