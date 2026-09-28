// Mobile Menu

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all required fields.");
        return;
    }

    alert("Thank you " + name + "! Your message has been sent.");

    document.getElementById("contactForm").reset();
});