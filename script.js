document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    skills.forEach((skill) => {
        observer.observe(skill);
    });
});

// Contact 

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Form Data:", { name, email, message });

    // Display success message
    const responseMessage = document.createElement("p");
    responseMessage.textContent = "Thank you! Your message has been sent.";
    responseMessage.style.color = "green";
    responseMessage.style.marginTop = "1rem";
    this.appendChild(responseMessage);

    // Clear form fields
    this.reset();
});