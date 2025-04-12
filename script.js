document.addEventListener("DOMContentLoaded", function () {
    // Toggle hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  
    // Simple Contact Form Submission Feedback
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const response = document.getElementById("formResponse");
      response.textContent = `Thanks for your message, ${name}! I'll get back to you soon.`;
      response.style.color = "green";
      // Optionally, clear form fields
      form.reset();
    });
  });