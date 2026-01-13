# Component Conversion Routine Checklist

**Purpose:** Systematic process for converting Growik HTML components to React  
**Target:** Google AI Studio compatibility  
**Approach:** One component at a time with quality control  
**Date:** January 13, 2026

---

## 🎯 Project Setup

### **Technology Stack**
- ✅ **Framework:** React 18+
- ✅ **Language:** JavaScript (AI Studio compatible)
- ✅ **Styling:** CSS Modules (clean, scoped, AI Studio friendly)
- ✅ **Animations:** GSAP 3.14.2 + ScrollTrigger
- ✅ **Build Tool:** Vite (fast, modern)

### **Why This Stack?**
- **JavaScript over TypeScript:** Simpler for AI Studio editing
- **CSS Modules:** Scoped styles, no conflicts, easy to understand
- **Vite:** Fast development, AI Studio can handle it
- **GSAP:** Already documented, animation code ready

---

## 📋 COMPONENT CONVERSION ROUTINE

### **Phase 1: PREPARATION** ⚙️

#### **Step 1.1: Identify Component**
- [ ] Component name from COMPONENT_MAP.md
- [ ] Section location in HTML
- [ ] Dependencies (sub-components, assets)
- [ ] Animation requirements

**Output:** Component brief document

---

#### **Step 1.2: Extract HTML Structure**
- [ ] Locate component in original HTML
- [ ] Copy full HTML block with all nested elements
- [ ] Identify all CSS classes used
- [ ] Note all data attributes (data-w-id, etc.)
- [ ] List all asset references (images, videos)

**Output:** Raw HTML snippet saved

---

#### **Step 1.3: Analyze Props & State**
- [ ] List all dynamic data (text, images, links)
- [ ] Identify user interactions (clicks, hovers, scrolls)
- [ ] Determine state requirements (open/closed, active, etc.)
- [ ] Map props from COMPONENT_MAP.md

**Output:** Props interface defined

---

### **Phase 2: CONVERSION** 🔄

#### **Step 2.1: Create Component File**
- [ ] Create file: `src/components/[category]/[ComponentName].jsx`
- [ ] Add file header comment with purpose
- [ ] Import React and dependencies
- [ ] Set up component function with props

**Template:**
```jsx
/**
 * [ComponentName] - [Brief description]
 * Used in: [Section name]
 * Animations: [List animations]
 */

import React from 'react';
import styles from './[ComponentName].module.css';

export default function [ComponentName]({ prop1, prop2 }) {
  // Component logic here
  
  return (
    // JSX here
  );
}
```

---

#### **Step 2.2: Convert HTML to JSX**
- [ ] Replace `class` with `className`
- [ ] Convert inline styles to camelCase
- [ ] Replace static text with props
- [ ] Add proper closing tags
- [ ] Remove Webflow-specific attributes (unless needed for CSS)
- [ ] Ensure semantic HTML (proper heading hierarchy)

**Quality Checks:**
- [ ] All tags properly closed
- [ ] No HTML comments in JSX
- [ ] Props properly destructured
- [ ] Conditional rendering uses ternary or &&

---

#### **Step 2.3: Extract & Convert CSS**
- [ ] Create `[ComponentName].module.css`
- [ ] Copy relevant CSS from original
- [ ] Convert classes to module format (`.className`)
- [ ] Remove unused styles
- [ ] Organize: layout → typography → colors → animations
- [ ] Add comments for complex styles

**Quality Checks:**
- [ ] No global styles (all scoped)
- [ ] Responsive breakpoints included
- [ ] Animation keyframes defined
- [ ] Z-index values documented

---

#### **Step 2.4: Add Animations**
- [ ] Import GSAP and plugins
- [ ] Use `useEffect` for animation setup
- [ ] Add `useRef` for DOM references
- [ ] Implement animation from `claude_exact_animations.js`
- [ ] Add cleanup in useEffect return

**Template:**
```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    // Animation setup
    const animation = gsap.to(elementRef.current, {
      // animation properties
    });
    
    // Cleanup
    return () => animation.kill();
  }, []);
  
  return <div ref={elementRef}>...</div>;
}
```

**Quality Checks:**
- [ ] Animations don't run on every render
- [ ] Cleanup function present
- [ ] ScrollTrigger refreshed on mount
- [ ] Performance optimized (no jank)

---

### **Phase 3: INTEGRATION** 🔗

#### **Step 3.1: Handle Assets**
- [ ] Copy videos to `public/videos/`
- [ ] Copy images to `public/images/`
- [ ] Update asset paths in component
- [ ] Verify all assets load correctly

**Quality Checks:**
- [ ] Paths use `/` for public folder
- [ ] Videos have autoplay, muted, loop attributes
- [ ] Images have alt text
- [ ] Lazy loading considered for performance

---

#### **Step 3.2: Create Sub-components**
- [ ] Identify reusable parts
- [ ] Extract to separate files
- [ ] Pass props from parent
- [ ] Test independently

**Example:** If converting ServicesSection, extract ServiceCard first.

---

#### **Step 3.3: Add to Parent/Page**
- [ ] Import component in App.jsx or page file
- [ ] Pass required props
- [ ] Verify placement in layout
- [ ] Check spacing/margins

---

### **Phase 4: TESTING** ✅

#### **Step 4.1: Visual Testing**
- [ ] Component renders without errors
- [ ] Layout matches original design
- [ ] Responsive at all breakpoints (mobile, tablet, desktop)
- [ ] Colors and fonts correct
- [ ] Spacing and alignment accurate

**Test Viewports:**
- [ ] Mobile: 375px
- [ ] Tablet: 768px
- [ ] Desktop: 1920px

---

#### **Step 4.2: Functionality Testing**
- [ ] All interactive elements work (buttons, links, accordions)
- [ ] Hover states correct
- [ ] Click handlers fire
- [ ] Forms validate (if applicable)
- [ ] Videos play/pause correctly

---

#### **Step 4.3: Animation Testing**
- [ ] Animations trigger correctly
- [ ] Scroll-based animations sync with scroll position
- [ ] Auto-play animations loop smoothly
- [ ] No performance issues (check FPS)
- [ ] Animations work on mobile

**Tools:**
- Chrome DevTools Performance tab
- React DevTools Profiler

---

#### **Step 4.4: Accessibility Testing**
- [ ] Keyboard navigation works
- [ ] Screen reader compatible (test with NVDA/JAWS)
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] ARIA labels where needed

---

### **Phase 5: DOCUMENTATION** 📝

#### **Step 5.1: Component Documentation**
- [ ] Add JSDoc comments to component
- [ ] Document all props with types and defaults
- [ ] Add usage example
- [ ] Note any gotchas or special requirements

**Template:**
```jsx
/**
 * HeroSection - Main landing section with 3D rotating text
 * 
 * @param {string[]} line1Words - Array of 4 words for 3D rotation
 * @param {string[]} line2Phrases - Array of phrases for marquee
 * @param {string} tagline - Small text above title
 * @param {string} subtitle - Text below title
 * 
 * @example
 * <HeroSection 
 *   line1Words={["MARKETING", "STRATEGY", "CONSULTING", "BRANDING"]}
 *   line2Phrases={["MADE SIMPLE", "THAT WORKS"]}
 *   tagline="marketing Agency"
 *   subtitle="Partners in Growth"
 * />
 */
```

---

#### **Step 5.2: Update Progress Tracker**
- [ ] Mark component as complete in COMPONENT_MAP.md
- [ ] Add to completed components list
- [ ] Note any deviations from original
- [ ] Document known issues (if any)

---

#### **Step 5.3: Git Commit**
- [ ] Stage component files
- [ ] Write descriptive commit message
- [ ] Push to GitHub

**Commit Message Format:**
```
feat: Add [ComponentName] component

- Converted from Webflow HTML
- Added GSAP animations
- Fully responsive
- Accessibility compliant

Closes #[issue-number]
```

---

### **Phase 6: REVIEW & ITERATE** 🔄

#### **Step 6.1: Self-Review Checklist**
- [ ] Code follows React best practices
- [ ] No console errors or warnings
- [ ] Performance is acceptable (< 100ms render)
- [ ] Accessibility score > 90 (Lighthouse)
- [ ] Mobile-friendly (Google Mobile-Friendly Test)

---

#### **Step 6.2: User Review**
- [ ] Present component to user
- [ ] Gather feedback
- [ ] Note requested changes
- [ ] Prioritize fixes

---

#### **Step 6.3: Iterate**
- [ ] Make requested changes
- [ ] Re-test after changes
- [ ] Update documentation
- [ ] Commit changes

---

## 🎯 QUALITY GATES

### **Before Moving to Next Component:**
- [ ] ✅ Component renders correctly
- [ ] ✅ Animations work smoothly
- [ ] ✅ Responsive on all devices
- [ ] ✅ Accessible (keyboard + screen reader)
- [ ] ✅ Performance optimized
- [ ] ✅ Documented
- [ ] ✅ Committed to Git
- [ ] ✅ User approved

---

## 📊 PROGRESS TRACKING

### **Component Status:**
| Component | Status | Date | Notes |
|-----------|--------|------|-------|
| Header | ⏳ Pending | - | - |
| HeroSection | ⏳ Pending | - | - |
| BrandMarquee | ⏳ Pending | - | - |
| AboutSection | ⏳ Pending | - | - |
| ServicesSection | ⏳ Pending | - | - |
| ProjectsSection | ⏳ Pending | - | - |
| ReviewsSection | ⏳ Pending | - | - |
| StatsSection | ⏳ Pending | - | - |
| PackagesSection | ⏳ Pending | - | - |
| FAQSection | ⏳ Pending | - | - |
| CTASection | ⏳ Pending | - | - |
| Footer | ⏳ Pending | - | - |

**Status Legend:**
- ⏳ Pending
- 🔄 In Progress
- ✅ Complete
- ⚠️ Issues
- 🔁 Revising

---

## 🚀 QUICK START GUIDE

### **For Each New Component:**

1. **Read component section in COMPONENT_MAP.md**
2. **Open this checklist**
3. **Follow phases 1-6 sequentially**
4. **Check off each item as completed**
5. **Don't skip quality gates**
6. **Get user approval before proceeding**

---

## 💡 BEST PRACTICES

### **DO:**
- ✅ Follow the routine systematically
- ✅ Test thoroughly at each phase
- ✅ Document as you go
- ✅ Commit frequently
- ✅ Ask for clarification when unsure
- ✅ Keep components small and focused
- ✅ Reuse sub-components

### **DON'T:**
- ❌ Skip testing phases
- ❌ Mix multiple components in one commit
- ❌ Ignore accessibility
- ❌ Hardcode values that should be props
- ❌ Leave console.logs in production code
- ❌ Copy-paste without understanding
- ❌ Rush through quality checks

---

## 🛠️ TOOLS & RESOURCES

### **Development:**
- VS Code with React extensions
- React DevTools (browser extension)
- Chrome DevTools

### **Testing:**
- Lighthouse (performance & accessibility)
- Google Mobile-Friendly Test
- WAVE (accessibility)
- BrowserStack (cross-browser)

### **References:**
- COMPONENT_MAP.md (component specs)
- claude_exact_animations.js (animation code)
- CUBE_MATH_EXPLAINED.md (3D animation math)
- Original HTML (structure reference)

---

## 📞 WHEN TO ASK FOR HELP

**Ask user when:**
- Design decision needed (colors, spacing, etc.)
- Functionality unclear from original
- Multiple implementation options exist
- Trade-offs between approaches
- Breaking changes required

**Don't ask for:**
- Standard React patterns (use best practices)
- CSS syntax questions (research first)
- Minor styling tweaks (make reasonable decisions)

---

## 🎓 LEARNING NOTES

**After Each Component:**
- What went well?
- What was challenging?
- What can be improved?
- Any patterns to reuse?

**Document learnings for future components!**

---

**This routine ensures:**
- ✅ Consistent quality across all components
- ✅ Nothing is missed or forgotten
- ✅ Efficient, systematic workflow
- ✅ AI Studio compatible output
- ✅ User satisfaction

**Follow this routine religiously for best results!**

