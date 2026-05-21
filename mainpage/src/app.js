document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // 한 번만 애니메이션 실행
      }
    });
  }, { threshold: 0.15 }); // 15% 정도 보일 때 실행

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });
});