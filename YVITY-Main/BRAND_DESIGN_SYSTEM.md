# 🎨 YVITY Brand Design System

## Brand Identity

**Brand Name:** YVITY
**Tagline:** "Credibility that Connects"
**Mission:** Premium credential verification and advisory platform

---

## 🎯 Visual Identity

### Color Palette

#### Primary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Teal** | #0A4A4A | 10, 74, 74 | Headers, buttons, primary text |
| **Amber** | #F59E0B | 245, 158, 11 | Accents, highlights, CTAs |
| **Cream** | #F8F6F1 | 248, 246, 241 | Backgrounds, subtle contrast |

#### Secondary Colors
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Light Amber** | #FEF3C7 | 254, 243, 199 | Light badges, backgrounds |
| **Light Blue** | #DBEAFE | 219, 234, 254 | Alt status, secondary badges |
| **White** | #FFFFFF | 255, 255, 255 | Cards, modals, text |

#### Neutrals
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Dark Gray** | #374151 | 55, 65, 81 | Secondary text |
| **Medium Gray** | #6B7280 | 107, 114, 128 | Tertiary text, borders |
| **Light Gray** | #D1D5DB | 209, 213, 219 | Disabled states |

### Color Combinations

**Primary + Accent** (High Impact)
- Teal (#0A4A4A) text on Cream (#F8F6F1) background
- Amber (#F59E0B) accents on White backgrounds

**Brand Gradient** (Premium Feel)
- from-[#0A4A4A] to-[#0A4A4A]/80 (Teal gradient for headers)
- Adds depth and visual interest

---

## 🔤 Typography System

### Font Stack

#### Headings: Cormorant Garamond
- **Family:** Serif, elegant
- **Weights:** 400, 500, 600, 700
- **Usage:** Page titles, section headers, modal titles
- **Character:** Premium, sophisticated, trustworthy

```css
font-family: var(--font-cormorant), serif;
```

#### Body: Poppins
- **Family:** Sans-serif, modern
- **Weights:** 400, 500, 600, 700
- **Usage:** Form inputs, descriptions, labels, body text
- **Character:** Clean, readable, contemporary

```css
font-family: var(--font-poppins), sans-serif;
```

#### Secondary: Nunito
- **Family:** Sans-serif, versatile
- **Weights:** 400, 500, 600, 700
- **Usage:** UI elements, secondary text
- **Character:** Friendly, accessible

```css
font-family: var(--font-nunito), sans-serif;
```

### Font Sizes & Weights

| Size | Heading | Body | Usage |
|------|---------|------|-------|
| 11px | - | 600 semibold | Labels, tags, badges |
| 12px | - | 400 normal | Help text, captions |
| 13px | - | 500-600 | Form inputs, small text |
| 14px | - | 400 normal | Default body text |
| 16px | 700 bold | 600 semibold | Button text, prominent labels |
| 18px | 700 bold | - | Section headers |
| 20px | 700 bold | - | Subheadings |
| 24px | 700 bold | - | Page titles |
| 28px | 700 bold | - | Hero text |

### Line Heights

- **Headings:** 1.2 (tight, professional)
- **Body:** 1.5 (comfortable reading)
- **Small text:** 1.4 (accessible)

---

## 🎭 Component Styling

### Buttons

**Primary Button**
```css
bg-[#0A4A4A]
hover:bg-[#0A4A4A]/90
text-white
px-4 py-2
rounded-lg
font-poppins font-semibold
shadow-sm hover:shadow-md
```

**Secondary Button**
```css
bg-[#F8F6F1]
hover:bg-[#F8F6F1]/80
text-[#0A4A4A]
px-4 py-2
rounded-lg
border border-[#F8F6F1]
```

**Badge - Active**
```css
bg-[#FEF3C7]
text-[#F59E0B]
px-3 py-1
rounded-full
text-11px font-semibold
```

**Badge - Status**
```css
bg-[#DBEAFE]
text-[#2563EB]
px-3 py-1
rounded-full
text-11px font-semibold
```

### Cards

**Standard Card**
```css
bg-white
rounded-2xl
border border-[#F8F6F1]
shadow-sm hover:shadow-md
p-5
transition-shadow
```

**Stat Card**
```css
bg-white
rounded-2xl
p-5
border border-[#F8F6F1]
shadow-sm
hover:shadow-md
font-cormorant heading
```

### Inputs

**Form Input**
```css
bg-white
border-2 border-[#0A4A4A]/20
focus:border-[#F59E0B]
focus:ring-2 focus:ring-[#F59E0B]/30
rounded-xl
p-3 sm:p-4
font-poppins
placeholder-gray/70
```

**Search Input (Dark)**
```css
bg-gradient-to-r from-[#0A4A4A] to-[#0A4A4A]/90
text-white
placeholder-white/60
rounded-full
px-6
h-12
```

### Modals

**Modal Header**
```css
bg-gradient-to-r from-[#0A4A4A] to-[#0A4A4A]/80
px-6 py-6
flex items-center justify-between
```

**Modal Content**
```css
bg-white
rounded-3xl
shadow-2xl
overflow-hidden
w-full md:w-[450px]
```

---

## ✨ Animation Tokens

### Transitions

**Default Duration:** 200ms - 300ms
**Easing:** cubic-bezier(0.32, 0.72, 0, 1) (spring-like)

### Motion Variations

**Entrance Animation**
```
opacity: 0 → 1
transform: scale(0.95) → scale(1)
y: 20px → 0
Duration: 300ms
```

**Hover Animation**
```
scale: 1 → 1.05
shadow: sm → md
Duration: 150ms
```

**Tap Animation**
```
scale: 1 → 0.95
Duration: 100ms (immediate)
```

**Stagger Animation**
```
Delay between items: 50ms
Offset for each item: i * 50ms
```

### Framer Motion Usage

```javascript
// Entry animation
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ type: "spring", stiffness: 120 }}

// Hover animation
whileHover={{ scale: 1.05 }}

// Tap feedback
whileTap={{ scale: 0.95 }}
```

---

## 📐 Spacing System

### Scale
- **2px:** Minimal spacing
- **4px:** Tight spacing
- **6px:** Extra small
- **8px:** Small (default)
- **12px:** Medium-small
- **16px:** Medium
- **24px:** Large
- **32px:** Extra large
- **48px:** Huge

### Padding Guidelines

**Cards/Containers**
- Mobile: 16px (p-4)
- Desktop: 24px (p-6)

**Form Elements**
- Inputs: 12-16px (p-3 to p-4)
- Buttons: 8-12px (py-2 to py-3)

**Modals**
- Header/Footer: 24px (py-6)
- Content: 24px (px-6 py-5)

---

## 🎯 Responsive Design

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large:** > 1280px

### Mobile-First Strategy
- Base styles: mobile optimized
- sm: 640px and up
- md: 768px and up
- lg: 1024px and up
- xl: 1280px and up

### Touch Targets
- Minimum: 48px × 48px
- Buttons: 44px × 44px minimum
- Icons: 20px - 24px

---

## ♿ Accessibility Standards

### Color Contrast
- **AAA Level:** 7:1 ratio (critical elements)
- **AA Level:** 4.5:1 ratio (standard)
- All text on backgrounds meets AA minimum

### Focus States
- All interactive elements have visible focus rings
- Focus ring color: #0A4A4A with 3px width
- Outline offset: 2px

### Motion
- All animations can be disabled via `prefers-reduced-motion`
- No auto-playing animations
- Users can pause animations

### Typography
- Minimum font size: 12px
- Line height: ≥ 1.5x for body text
- Letter spacing: 0.5px for headers

---

## 🔄 Implementation Checklist

When implementing YVITY brand:

- [ ] Use #0A4A4A for primary elements
- [ ] Use #F59E0B for accents and CTAs
- [ ] Use #F8F6F1 for backgrounds
- [ ] Apply Cormorant for headings (font-cormorant)
- [ ] Apply Poppins for body text (font-poppins)
- [ ] Add Framer Motion animations
- [ ] Implement hover states (scale 1.05)
- [ ] Add tap feedback (scale 0.95)
- [ ] Ensure 4.5:1 contrast ratio minimum
- [ ] Test mobile responsiveness
- [ ] Add focus rings for accessibility
- [ ] Use consistent spacing (8px scale)
- [ ] Apply shadow hierarchy (sm → md → lg)
- [ ] Optimize for touch (48px targets)

---

## 📱 Device Support

- **iOS 13+**
- **Android 8+**
- **Chrome 90+**
- **Firefox 88+**
- **Safari 14+**
- **Edge 90+**

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Animations: 60 fps
- Touch response: < 100ms

---

## 📚 Usage Examples

### Customers Dashboard
- Background: #F8F6F1
- Stat cards with Teal accents
- Amber badges for reviews
- Animations on entry

### Customer Profile Modal
- Gradient header: Teal
- Icon indicators with Teal background
- Color-coded status badges
- Staggered animations

### Buttons & Forms
- Primary: Teal (#0A4A4A)
- Accents: Amber (#F59E0B)
- Borders: Brand cream (#F8F6F1)
- Focus: Amber ring

---

## 🎓 Brand Guidelines

**Do's:**
✅ Use primary color for key actions
✅ Apply consistent typography hierarchy
✅ Maintain 8px spacing scale
✅ Use animations for feedback
✅ Keep contrast ratios accessible
✅ Test on mobile devices
✅ Follow responsive breakpoints

**Don'ts:**
❌ Use arbitrary colors outside palette
❌ Mix fonts inconsistently
❌ Create focus states without outlines
❌ Disable animations for all users
❌ Use colors with insufficient contrast
❌ Skip mobile responsiveness
❌ Add animations without purpose

---

**Document Version:** 1.0
**Last Updated:** 2026-05-21
**Status:** Production Ready