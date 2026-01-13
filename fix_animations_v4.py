#!/usr/bin/env python3
# Fix all remaining animation issues

with open('index_FIXED_v3.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find and replace the animation script section
# The issue with hero rotation is using rotateX: 360 which causes a jump
# Need to use rotateX: "+=90" for continuous rotation

new_animation_script = """
<script>
console.log('🎬 Initializing Growik animations v4...');

// Wait for GSAP to be ready
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // 1. Hero 3D Text Rotation - SEAMLESS INFINITE LOOP
    const hero3DBox = document.querySelector('.hero-section ._3d-text-box, ._3d-text-box');
    if (hero3DBox) {
        // Use +=90 for continuous rotation without restart
        gsap.to(hero3DBox, {
            rotateX: "+=360",
            duration: 8,
            repeat: -1,
            ease: "none",
            modifiers: {
                rotateX: function(x) {
                    // Keep rotation value normalized to prevent overflow
                    return (parseFloat(x) % 360) + "deg";
                }
            }
        });
        console.log('✓ Hero 3D rotation - seamless loop');
    }
    
    // 2. Section Title 3D Rotations (Scroll-triggered)
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
    
    // 3. Brand Logos Marquee - INFINITE SCROLL
    // Try multiple selectors to find brand logos
    const brandSelectors = [
        '.logo-marquee-wrapper',
        '.partner-logo-wrapper',
        '.client-logo-wrapper',
        '[class*="logo"]._scroll',
        '[class*="partner"]',
        '[class*="client"]'
    ];
    
    let brandMarquee = null;
    for (const selector of brandSelectors) {
        brandMarquee = document.querySelector(selector);
        if (brandMarquee) break;
    }
    
    // If still not found, search by content
    if (!brandMarquee) {
        const allWrappers = document.querySelectorAll('[class*="scroll"], [class*="marquee"]');
        brandMarquee = Array.from(allWrappers).find(el => 
            el.textContent.includes('Involve') || 
            el.textContent.includes('Botify') ||
            el.textContent.includes('Flowen')
        );
    }
    
    if (brandMarquee) {
        // Duplicate content for seamless loop
        const content = brandMarquee.innerHTML;
        brandMarquee.innerHTML = content + content;
        
        gsap.to(brandMarquee, {
            x: "-50%",
            duration: 30,
            repeat: -1,
            ease: "none"
        });
        console.log('✓ Brand logos marquee - infinite scroll');
    } else {
        console.warn('⚠ Brand marquee not found');
    }
    
    // 4. Hero Line 2 Marquee - INFINITE SCROLL
    const heroMarquees = document.querySelectorAll('.hero-section .scroll-text-wrapper, .scroll-text-wrapper');
    heroMarquees.forEach((marquee) => {
        // Duplicate content for seamless loop
        const content = marquee.innerHTML;
        marquee.innerHTML = content + content;
        
        gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            repeat: -1,
            ease: "none"
        });
    });
    console.log(`✓ ${heroMarquees.length} hero marquees - infinite scroll`);
    
    // 5. Service Scrolling Text (Scroll-linked)
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
    
    // 6. Fade-in animations
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
    
    console.log('🎉 All animations initialized!');
} else {
    console.error('❌ GSAP not loaded!');
}
</script>
"""

# Replace the old animation script
import re

# Find the last <script> tag with animation code
pattern = r'<script>\s*console\.log\(["\']🎬[^<]*</script>'
if re.search(pattern, html, re.DOTALL):
    html = re.sub(pattern, new_animation_script, html, flags=re.DOTALL)
else:
    # If not found, append before </body>
    html = html.replace('</body>', new_animation_script + '\n</body>', 1)

# Write the new version
with open('index_FIXED_v4.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Created index_FIXED_v4.html")
print("✅ Fixed hero rotation - seamless infinite loop")
print("✅ Fixed brand marquee - multiple selectors")
print("✅ Fixed hero marquees - seamless loop with duplicated content")
print(f"✅ File size: {len(html):,} bytes")
