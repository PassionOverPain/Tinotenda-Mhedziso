gsap.registerPlugin(ScrollTrigger);

function applyAnimation(elementSelector) {
  const element = document.querySelector(elementSelector);

  gsap.from(element, {
    x: -100,  
    opacity: 0,
    duration: 1,  
    ease: 'ease-in',  
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    }
  });
}

applyAnimation('.hero');
applyAnimation('.about');
applyAnimation('.services');
applyAnimation('.projects');
applyAnimation('.contact');
