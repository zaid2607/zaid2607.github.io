document.addEventListener("DOMContentLoaded", function () {
  // Typing animation under name
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      strings: [
        "Frontend Developer",
        "React Native Developer",
        "Full-Stack Developer",
        "Node.js Backend Developer",
        "Mobile App Developer",
        "Web Developer",
        "Software Support Specialist",
        "QA Tester",
        "SQL Developer",
        "Technical Support Analyst",
        "Computer System Technician"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });
  }

  // Animate skill cards on scroll
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
  skills.forEach((skill) => observer.observe(skill));

  // Contact form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = contactForm.querySelector('input[name="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validate email format
      if (!emailRegex.test(emailInput.value)) {
        showMessage("❗ Please enter a valid email address.", "red");
        return;
      }

      const formData = new FormData(contactForm);

      // Remove previous response message
      const oldMessage = contactForm.querySelector(".form-response");
      if (oldMessage) oldMessage.remove();

      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            showMessage("✅ Thank you! Your message has been sent.", "green");
            contactForm.reset();
          } else {
            showMessage("❌ Oops! Something went wrong. Please try again.", "red");
          }
        })
        .catch(() => {
          showMessage("⚠️ Error sending message. Please check your connection.", "red");
        });
    });

    function showMessage(text, color) {
      const message = document.createElement("p");
      message.classList.add("form-response");
      message.style.marginTop = "1rem";
      message.style.color = color;
      message.textContent = text;
      contactForm.appendChild(message);

      // Auto-hide after 5 seconds
      setTimeout(() => {
        message.remove();
      }, 5000);
    }
  }
});
