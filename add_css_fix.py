#!/usr/bin/env python3
# Add Claude's complete CSS to fix 3D animations

# Read the current HTML
with open('index_FIXED_v2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Create comprehensive CSS with all of Claude's specifications
css_fixes = """
<style>
/* ========================================
   CLAUDE'S 3D ANIMATION CSS - COMPLETE FIX
   ======================================== */

/* Hero 3D Text Container */
._3d-text-block {
  perspective: 5000px !important;
}

._3d-text-box {
  transform-origin: 50% !important;
  transform-style: preserve-3d !important;
}

/* Hero 3D Text Faces - EXACT TRANSFORMS FROM CLAUDE */
._3d-text-front {
  transform: translate3d(0, 0, 6rem) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-text-back {
  transform: translate3d(0, 0, -6rem) rotateX(180deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-text-top {
  transform: translate(0, -6rem) rotateX(90deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-text-bottom {
  transform: translate(0, 6rem) rotateX(-90deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

/* Section Title Container */
._3d-title-block {
  perspective: 5000px !important;
}

._3d-title-box {
  transform-origin: 50% !important;
  transform-style: preserve-3d !important;
}

/* Section Title Faces - EXACT TRANSFORMS FROM CLAUDE */
._3d-title-front {
  transform: translate3d(0, 0, 5rem) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-title-back {
  transform: translate3d(0, 0, -5rem) rotateX(180deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-title-top {
  transform: translate(0, -5rem) rotateX(90deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}

._3d-title-bottom {
  transform: translate(0, -5rem) rotateX(-90deg) !important;
  opacity: 1 !important;
  transform-style: preserve-3d !important;
}
</style>
"""

# Insert CSS before closing </head> tag or </body> tag
if '</head>' in html:
    html = html.replace('</head>', css_fixes + '\n</head>', 1)
elif '</body>' in html:
    # If no </head>, insert before </body>
    html = html.replace('</body>', css_fixes + '\n</body>', 1)
else:
    # Last resort: append at end
    html = html + css_fixes

# Write the fixed version
with open('index_FIXED_v3.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Created index_FIXED_v3.html with Claude's complete CSS")
print("✅ Added 3D transforms for all faces")
print("✅ Added opacity fixes with !important")
print("✅ Added perspective and preserve-3d")
print(f"✅ File size: {len(html):,} bytes")
