// Growik Template - GSAP Animations
// Complete animation implementation

console.log('🎬 Initializing Growik animations...');

// Wait for DOM and GSAP to be ready
function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('❌ GSAP or ScrollTrigger not loaded!');
    return;
  }
  
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  console.log('✓ GSAP and ScrollTrigger registered');
  
  // 1. Hero 3D text rotation (auto-rotating)
  const heroBox = document.querySelector('.hero-section ._3d-text-box');
  if (heroBox) {
    gsap.to(heroBox, {
      rotateX: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });
    console.log('✓ Hero 3D text animation initialized');
  }
  
  // 2. Section title 3D rotations (scroll-triggered)
  const titleBoxes = gsap.utils.toArray('._3d-title-box');
  titleBoxes.forEach((box, index) => {
    gsap.to(box, {
      rotateX: -360,
      z: -100,
      scrollTrigger: {
        trigger: box.closest('._3d-title-wrapper'),
        start: "top 80%",
        end: "top 30%",
        scrub: 1.5
      }
    });
  });
  console.log(`✓ ${titleBoxes.length} section title 3D animations initialized`);
  
  // 3. Horizontal marquee - hero section
  const heroMarquee = document.querySelector('.hero-section .scroll-text-wrapper');
  if (heroMarquee) {
    gsap.to(heroMarquee, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });
    console.log('✓ Hero marquee animation initialized');
  }
  
  // 4. Service name marquees (scroll-triggered)
  const scrollingWrappers = gsap.utils.toArray('.scrolling-text-wrapper');
  scrollingWrappers.forEach((wrapper) => {
    const scrollItem = wrapper.querySelector('.scroll-text-item');
    if (scrollItem) {
      gsap.to(scrollItem, {
        x: "-50%",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  });
  console.log(`✓ ${scrollingWrappers.length} service marquees initialized`);
  
  // 5. Spinning star with scroll speed-up
  const star = document.querySelector('.scroll-down-image');
  if (star) {
    const tween = gsap.to(star, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none"
    });
    
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "100px top",
      onUpdate: (self) => {
        const newSpeed = 4 - (self.progress * 3);
        tween.duration(Math.max(newSpeed, 1));
      }
    });
    console.log('✓ Spinning star animation initialized');
  }
  
  // 6. Stacking cards
  const serviceWrappers = gsap.utils.toArray('.service-wrapper');
  serviceWrappers.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      pin: true,
      pinSpacing: false,
      endTrigger: ".service-component",
      end: "bottom bottom"
    });
    
    if (index > 0) {
      const prevCard = serviceWrappers[index - 1];
      gsap.to(prevCard, {
        scale: 0.95,
        opacity: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      });
    }
  });
  console.log(`✓ ${serviceWrappers.length} stacking cards initialized`);
  
  // 7. Number rolling animation
  serviceWrappers.forEach((card, index) => {
    const rollItem = card.querySelector('.roll-number-item');
    if (rollItem) {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => {
          gsap.to(rollItem, {
            y: `-${(index + 1) * 100}%`,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    }
  });
  console.log('✓ Number rolling animations initialized');
  
  // 8. Count-up stats
  const statNumbers = gsap.utils.toArray('.stat-number');
  statNumbers.forEach((stat) => {
    const targetText = stat.textContent.trim();
    const target = parseInt(targetText.replace(/[^0-9]/g, ''));
    
    if (!isNaN(target)) {
      ScrollTrigger.create({
        trigger: stat,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.from(stat, {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            onUpdate: function() {
              const val = Math.ceil(this.targets()[0].textContent);
              stat.textContent = targetText.includes('+') ? val + '+' : 
                                 targetText.includes('%') ? val + '%' : val;
            }
          });
        }
      });
    }
  });
  console.log(`✓ ${statNumbers.length} count-up animations initialized`);
  
  // 9. Expanding circles
  const shapeWrappers = gsap.utils.toArray('.cta-shape-wrapper .shape-wrapper');
  shapeWrappers.forEach((shape, index) => {
    gsap.from(shape, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".section-cta",
        start: "top center",
        scrub: 1
      }
    });
  });
  console.log(`✓ ${shapeWrappers.length} expanding circles initialized`);
  
  // 10. General fade-ins
  const fadeElements = gsap.utils.toArray('.case-study-wrapper, .testimonial-content-wrap');
  fadeElements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      }
    });
  });
  console.log(`✓ ${fadeElements.length} fade-in animations initialized`);
  
  console.log('🎉 All Growik animations initialized successfully!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
