document.addEventListener("DOMContentLoaded", function() {
  const applyButtons = document.querySelectorAll(".apply-btn");
  const reveals = document.querySelectorAll(".reveal");

  applyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "./apply.html";
    });
  });
  
  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.15 }); 

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });
});