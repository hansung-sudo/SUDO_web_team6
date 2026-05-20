// 메인 스크립트: 첫 화면 스크롤 페이드와 섹션 리빌 제어
// 순수 JS로 컴포넌트 역할을 분리함
(function(){
  const hero = document.getElementById('heroSection');
  const header = document.querySelector('.site-header');
  const reveals = document.querySelectorAll('.reveal');
  if(!hero || !header || reveals.length === 0) return;

  function updateHeroOpacity(){
    const fadeDistance = window.innerHeight * 0.6;
    const alpha = Math.max(0, 1 - window.scrollY / fadeDistance);
    hero.style.opacity = alpha;
    header.classList.toggle('visible', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateHeroOpacity);
  updateHeroOpacity();

  // 관찰 영역을 화면 중앙 근처로 축소하여, 섹션이 중앙에 올 때 활성화되도록 설정
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0});

  reveals.forEach(node => observer.observe(node));
})();