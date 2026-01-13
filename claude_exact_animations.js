// CLAUDE'S EXACT ANIMATION IMPLEMENTATION
console.log('🎬 Initializing with Claude exact specs...');

if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // HERO 3D TEXT - WITH PAUSE BEHAVIOR
    const hero3DBox = document.querySelector('.hero-section ._3d-text-box, ._3d-text-box');
    if (hero3DBox) {
        const heroTimeline = gsap.timeline({ repeat: -1 });
        
        // To 90° + PAUSE
        heroTimeline.to(hero3DBox, { rotateX: 90, duration: 1.5, ease: "power2.inOut" });
        heroTimeline.to(hero3DBox, { rotateX: 90, duration: 0.7 });
        
        // To 180° + PAUSE
        heroTimeline.to(hero3DBox, { rotateX: 180, duration: 1.5, ease: "power2.inOut" });
        heroTimeline.to(hero3DBox, { rotateX: 180, duration: 1.7 });
        
        // To 270° + PAUSE
        heroTimeline.to(hero3DBox, { rotateX: 270, duration: 1.5, ease: "power2.inOut" });
        heroTimeline.to(hero3DBox, { rotateX: 270, duration: 0.7 });
        
        // To 360° + PAUSE + RESET
        heroTimeline.to(hero3DBox, { rotateX: 360, duration: 1.5, ease: "power2.inOut" });
        heroTimeline.to(hero3DBox, { 
            rotateX: 360, 
            duration: 0.7,
            onComplete: () => gsap.set(hero3DBox, { rotateX: 0 })
        });
        
        console.log('✓ Hero 3D with pauses');
    }
    
    // SECTION TITLES
    const title3DBoxes = document.querySelectorAll('._3d-title-box');
    title3DBoxes.forEach((box) => {
        gsap.to(box, {
            rotateX: -360,
            scrollTrigger: {
                trigger: box.closest('section') || box.parentElement,
                start: "top 80%",
                end: "top 20%",
                scrub: 1.5
            }
        });
    });
    console.log(\`✓ \${title3DBoxes.length} section titles\`);
    
    console.log('🎉 Animations ready!');
}
