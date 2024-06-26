document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        const navCheck = document.getElementById('nav-check');
        navCheck.checked = false; // Close the nav menu after clicking a link
      });
    });
  });
  
