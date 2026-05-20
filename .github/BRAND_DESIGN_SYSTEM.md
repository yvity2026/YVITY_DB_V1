# 🎨 YVITY Brand Design System

## Overview
This document outlines the YVITY brand design system implementation across all customer-facing pages in the YVITY Dashboard.

## Brand Color Palette

### Primary Colors
- **Deep Teal**: `#0A4A4A` - Primary text, buttons, headers, key UI elements
- **Accent Amber**: `#F59E0B` - Highlights, badges, CTAs, hover states
- **Cream/Beige**: `#F8F6F1` - Main background, light accents

### Secondary Colors
- **Light Amber**: `#FEF3C7` - Badge backgrounds, light highlights
- **Light Blue**: `#DBEAFE` - Secondary badges, alternative highlights
- **White**: `#FFFFFF` - Cards, modals, high contrast areas
- **Gray**: `#6B7280` - Secondary text, disabled states

## Typography

### Font Families
- **Headings**: `Cormorant Garamond` (serif, elegant)
  - Weights: 400, 500, 600, 700
  - Usage: Page titles, modal headers, stat labels
  - Sizes: 24px (h1), 18px (h2), 16px (h3)

- **Body Text**: `Poppins` (sans-serif, modern)
  - Weights: 400, 500, 600, 700
  - Usage: Form inputs, descriptions, labels
  - Sizes: 14px (body), 12px (small), 11px (tiny)

- **Mono**: System default
  - Usage: Code, technical content

## Component Styling

### Buttons
```
Primary Button:
- Background: #0A4A4A
- Text: White
- Hover: #0A4A4A/90 with shadow increase
- Rounded: lg (8px)
- Padding: px-4 py-2 (small), px-6 py-3 (large)
- Animation: scale(1.05) on hover, scale(0.95) on tap

Secondary Button:
- Background: Transparent
- Border: #0A4A4A
- Text: #0A4A4A
- Hover: bg-#F8F6F1
```

### Cards
```
Standard Card:
- Background: White
- Border: 1px solid #F8F6F1
- Radius: 2xl (16px)
- Shadow: sm (default), md (hover)
- Padding: p-5 or p-6
- Hover: Shadow increase, bg-#F8F6F1/50
```

### Badges
```
Primary Badge (Amber):
- Background: #FEF3C7
- Text: #F59E0B
- Border Radius: full (rounded-full)
- Padding: px-3 py-1
- Font: poppins, font-semibold, text-[11px]

Secondary Badge (Blue):
- Background: #DBEAFE
- Text: #2563EB
- (Same styling as above)
```

### Avatars
```
Avatar Styling:
- Background Gradient: from-#0A4A4A to-#0A4A4A/80
- Border Radius: full (rounded-full)
- Size: Varies by context
  - Small (sm): w-8 h-8
  - Medium (md): w-10 h-10
  - Large (lg): w-16 h-16
- Shadow: sm or md for emphasis
```

### Search Bars
```
Search Input:
- Background: Gradient from-#0A4A4A to-#0A4A4A/90
- Text: White
- Border Radius: full (rounded-full)
- Height: h-12
- Shadow: md (default), lg (hover)
- Placeholder: white/60
```

### Headers
```
Page Header:
- Background: Gradient from-#0A4A4A to-#0A4A4A/80
- Text: White
- Font: cormorant (bold, lg)
- Padding: py-6 px-6
- Sticky: top-0 with z-index management
```

## Animation Guidelines

### Transitions
- **Hover**: scale(1.05), shadow increase
- **Tap**: scale(0.95), instant feedback
- **Entry**: opacity 0→1, y: 20→0, duration: 0.3s
- **Stagger**: 0.05s between items for sequences

### Framer Motion Presets
```javascript
// Card Entry
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 100 }}

// Button Hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// List Item Stagger
custom={index}
variants={itemVariants}
transition={{ delay: index * 0.05 }}
```

## Spacing System

- **2px**: 0.5
- **4px**: 1
- **8px**: 2
- **12px**: 3
- **16px**: 4
- **20px**: 5
- **24px**: 6
- **32px**: 8
- **40px**: 10
- **48px**: 12

## Responsive Breakpoints

- **Mobile**: < 640px (sm) - Single column, full-width components
- **Tablet**: 640px - 1024px (md) - Two columns, adjusted padding
- **Desktop**: > 1024px (lg) - Full layout, maximum spacing

## Implementation Checklist

- [x] Customers Dashboard Page
  - [x] Background color (#F8F6F1)
  - [x] StatCard component refactor
  - [x] Table styling with hover effects
  - [x] Review badge (amber color)
  - [x] View button styling
  - [x] Search bar gradient
  - [x] Framer Motion animations

- [x] CustomerProfile Modal
  - [x] Gradient header (#0A4A4A)
  - [x] Avatar styling with gradient
  - [x] Icon indicators (Phone, Mail, Map, Briefcase)
  - [x] Contact info cards
  - [x] Activity stats section
  - [x] Edit Profile button
  - [x] Animations with stagger
  - [x] Mobile responsiveness

- [x] PaginationControls
  - [x] Button colors matching brand
  - [x] Active state styling
  - [x] Hover animations
  - [x] Mobile view optimization
  - [x] Typography updates

## Future Pages to Update

- [ ] Advisor Management
- [ ] Reviews Dashboard
- [ ] Admin Dashboard
- [ ] Settings/Profile
- [ ] Reports & Analytics
- [ ] User Management

## Color Reference

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Teal | #0A4A4A | 10, 74, 74 | Headers, buttons, primary text |
| Accent Amber | #F59E0B | 245, 158, 11 | Badges, highlights, CTAs |
| Background Cream | #F8F6F1 | 248, 246, 241 | Main background |
| Light Amber | #FEF3C7 | 254, 243, 199 | Badge backgrounds |
| Light Blue | #DBEAFE | 219, 190, 254 | Secondary badges |
| White | #FFFFFF | 255, 255, 255 | Cards, high contrast |
| Gray 600 | #4B5563 | 75, 85, 99 | Secondary text |

## Testing Guidelines

### Accessibility
- Ensure color contrast ratio ≥ 4.5:1 for text
- Test with screen readers
- Verify keyboard navigation
- Check focus states visibility

### Responsive
- Test on mobile devices (320px, 375px, 414px)
- Test on tablets (768px, 1024px)
- Test on desktop (1280px, 1920px)
- Verify touch targets are at least 48px × 48px

### Performance
- Optimize images and assets
- Lazy load components where applicable
- Monitor animation frame rates
- Test on low-end devices

## Version History

- **v1.0** (2026-05-20) - Initial brand design system implementation
  - Customers page redesign
  - CustomerProfile modal enhancement
  - PaginationControls brand alignment
  - Full Framer Motion animation suite
