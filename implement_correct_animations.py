#!/usr/bin/env python3
"""
Implement correct 3D cube animations using Claude's exact measurements
"""

with open('index_FIXED_v3.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Complete CSS and JavaScript implementation
complete_implementation = """
<!-- CLAUDE'S EXACT CSS -->
<style id="claude-exact-3d-css">
/* ========================================
   HERO 3D TEXT - EXACT MEASUREMENTS
   ======================================== */

/* Container with perspective */
._3d-text-block {
    perspective: 5000px !important;
    perspective-origin: 480px 96px !important;
}

/* Cube container that rotates */
._3d-text-box {
    transform-style: preserve-3d !important;
    transform-origin: 480px 96px !important;
}

/* FRONT FACE */
._3d-text-front {
    transform: translate3d(0, 0, 96px) !important;
    transform-origin: 440px 96px !important;
    opacity: 1 !important;
}

/* BACK FACE */
._3d-text-back {
    transform: translate3d(0, 0, -96px) rotateX(180deg) !important;
    transform-origin: 440px 96px !important;
    opacity: 1 !important;
}

/* TOP FACE */
._3d-text-top {
    transform: translate(0, -96px) rotateX(90deg) !important;
    transform-origin: 440px 96px !important;
    opacity: 1 !important;
}

/* BOTTOM FACE */
._3d-text-bottom {
    transform: translate(0, 96px) rotateX(-90deg) !important;
    transform-origin: 440px 96px !important;
    opacity: 1 !important;
}

/* ========================================
   SECTION TITLES 3D - SCALED DOWN
   ======================================== */

/* Container with perspective (scaled proportionally) */
._3d-title-block {
    perspective: 5000px !important;
}

/* Cube container */
._3d-title-box {
    transform-style: preserve-3d !important;
}

/* FRONT FACE */
._3d-title-front {
    transform: translate3d(0, 0, 80px) !important;
    opacity: 1 !important;
}

/* BACK FACE */
._3d-title-back {
    transform: translate3d(0, 0, -80px) rotateX(180deg) !important;
    opacity: 1 !important;
}

/* TOP FACE */
._3d-title-top {
    transform: translate(0, -80px) rotateX(90deg) !important;
    opacity: 1 !important;
}

/* BOTTOM FACE */
._3d-title-bottom {
    transform: translate(0, 80px) rotateX(-90deg) !important;
    opacity: 1 !important;
}
</style>

<!-- CORRECT GSAP ANIMATIONS -->
<script>
console.log('🎬 Initializing Growik animations with Claude\\'s exact specs...');

if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // ========================================
    // 1. HERO 3D TEXT - WITH PAUSE BEHAVIOR
    // ========================================
    const hero3DBox = document.querySelector('.hero-section ._3d-text-box, ._3d-text-box');
    if (hero3DBox) {
        // Create timeline with pause behavior
        const heroTimeline = gsap.timeline({ repeat: -1 });
        
        // Rotate to 90° (TOP face) + PAUSE
        heroTimeline.to(hero3DBox, {
            rotateX: 90,
            duration: 1.5,
            ease: "power2.inOut"
        });
        heroTimeline.to(hero3DBox, {
            rotateX: 90,
            duration: 0.7  // PAUSE at TOP
        });
        
        // Rotate to 180° (BACK face) + PAUSE
        heroTimeline.to(hero3DBox, {
            rotateX: 180,
            duration: 1.5,
            ease: "power2.inOut"
        });
        heroTimeline.to(hero3DBox, {
            rotateX: 180,
            duration: 1.7  // PAUSE at BACK (longer)
        });
        
        // Rotate to 270° (BOTTOM face) + PAUSE
        heroTimeline.to(hero3DBox, {
            rotateX: 270,
            duration: 1.5,
            ease: "power2.inOut"
        });
        heroTimeline.to(hero3DBox, {
            rotateX: 270,
            duration: 0.7  // PAUSE at BOTTOM
        });
        
        // Rotate to 360° (FRONT face) + PAUSE
        heroTimeline.to(hero3DBox, {
            rotateX: 360,
            duration: 1.5,
            ease: "power2.inOut"
        });
        heroTimeline.to(hero3DBox, {
            rotateX: 360,
            duration: 0.7,  // PAUSE at FRONT
            onComplete: function() {
                // Reset to 0 for seamless loop
                gsap.set(hero3DBox, { rotateX: 0 });
            }
        });
        
        console.log('✓ Hero 3D rotation - with pause behavior');
    }
    
    // ========================================
    // 2. SECTION TITLE 3D ROTATIONS (Scroll-triggered)
    // ========================================
    const title3DBoxes = document.querySelectorAll('._3d-title-box');
    title3DBoxes.forEach((box, index) => {
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
    console.log(`✓ ${title3DBoxes.length} section title 3D animations`);
    
    // ========================================
    // 3. BRAND LOGOS MARQUEE - INFINITE SCROLL
    // ========================================
    // Try to find brand logos section
    const brandSelectors = [
        '.logo-marquee-wrapper',
        '.partner-logo-wrapper',
        '.client-logo-wrapper',
        '.scroll-text-wrapper.brand',
        '[class*="logo"]',
        '[class*="partner"]'
    ];
    
    let brandMarquee = null;
    for (const selector of brandSelectors) {
        brandMarquee = document.querySelector(selector);
        if (brandMarquee && (brandMarquee.textContent.includes('Involve') || brandMarquee.textContent.includes('Botify'))) {
            break;
        }
        brandMarquee = null;
    }
    
    // If still not found, search all scroll wrappers
    if (!brandMarquee) {
        const allScrollWrappers = document.querySelectorAll('[class*="scroll"]');
        brandMarquee = Array.from(allScrollWrappers).find(el => 
            el.textContent.includes('Involve') || 
            el.textContent.includes('Botify') ||
            el.textContent.includes('Flowen') ||
            el.textContent.includes('Techsy')
        );
    }
    
    if (brandMarquee) {
        // Duplicate content for seamless loop
        const originalContent = brandMarquee.innerHTML;
        brandMarquee.innerHTML = originalContent + originalContent;
        
        gsap.to(brandMarquee, {
            x: "-50%",
            duration: 30,
            repeat: -1,
            ease: "none"
        });
        console.log('✓ Brand logos marquee - infinite scroll');
    } else {
        console.warn('⚠ Brand marquee not found - will need manual selector');
    }
    
    // ========================================
    // 4. HERO MARQUEES - INFINITE SCROLL
    // ========================================
    const heroMarquees = document.querySelectorAll('.hero-section .scroll-text-wrapper');
    heroMarquees.forEach((marquee) => {
        // Duplicate content for seamless loop
        const originalContent = marquee.innerHTML;
        marquee.innerHTML = originalContent + originalContent;
        
        gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            repeat: -1,
            ease: "none"
        });
    });
    console.log(`✓ ${heroMarquees.length} hero marquees - infinite scroll`);
    
    // ========================================
    // 5. SERVICE SCROLLING TEXT (Scroll-linked)
    // ========================================
    const scrollingTexts = document.querySelectorAll('.scrolling-text-wrapper');
    scrollingTexts.forEach((wrapper) => {
        const item = wrapper.querySelector('.scroll-text-item');
        if (item) {
            gsap.to(item, {
                x: "-50%",
                scrollTrigger: {
                    trigger: wrapper.closest('.service-wrapper') || wrapper,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }
    });
    console.log(`✓ ${scrollingTexts.length} service scrolling texts`);
    
    // ========================================
    // 6. FADE-IN ANIMATIONS
    // ========================================
    const fadeElements = document.querySelectorAll('.service-wrapper, .case-study-wrapper, .testimonial-content-wrap');
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
    console.log(`✓ ${fadeElements.length} fade-in animations`);
    
    console.log('🎉 All animations initialized with Claude\\'s exact specs!');
} else {
    console.error('❌ GSAP not loaded!');
}
</script>
"""

# Find where to insert (before </body>)
if '</body>' in html:
    html = html.replace('</body>', complete_implementation + '\n</body>', 1)
else:
    # Fallback: append at end
    html += complete_implementation

# Write new version
with open('index_FINAL_CORRECT.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Created index_FINAL_CORRECT.html")
print("✅ Added Claude's exact CSS transforms")
print("✅ Added GSAP timeline with pause behavior")
print("✅ Added infinite marquees with seamless loop")
print(f"✅ File size: {len(html):,} bytes")
