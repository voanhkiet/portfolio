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

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    // Set initial state
    let activeCategory = 'all';
    let activeSearch = '';
  
    // Function to apply the combined filters
    function applyFilters() {
      galleryItems.forEach(item => {
        // Check if this item is in the selected category
        const inCategory = activeCategory === 'all' || item.classList.contains(activeCategory);
        // Check if this item's title (from data-title attribute) matches the search query
        const title = item.getAttribute('data-title').toLowerCase();
        const inSearch = activeSearch === '' || title.includes(activeSearch);
  
        // Show the item if both conditions are met, otherwise hide it
        if (inCategory && inSearch) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    // Initially apply filters so all items display (when no search query is input)
    applyFilters();
  
    // Category Filter Button Clicks
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove the "active" class from all buttons
        filterButtons.forEach(button => button.classList.remove('active'));
        // Set the clicked button as active
        btn.classList.add('active');
        // Update the active category
        activeCategory = btn.getAttribute('data-filter');
        // Apply the updated filters
        applyFilters();
      });
    });
  
    // Search Input Event
    searchInput.addEventListener('input', () => {
      activeSearch = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  });
  