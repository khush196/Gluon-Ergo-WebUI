# 📱 Mobile UX Quick Reference Card

## What Changed?

### 📦 New Components
- `components/MobileBottomNav/index.tsx` - Bottom navigation (mobile only)

### 🎨 New Styles  
- `styles/mobile-optimizations.css` - Mobile-specific optimizations

### 📝 Key Updates
- Content scales to 85% on mobile (< 640px)
- Bottom navigation with 4 buttons
- Header: Logo + Menu (mobile)
- Footer hidden on mobile, content in menu
- Short labels: β⁻ → GAU, β⁺ → GAUC

## 📐 Breakpoints

```
< 640px  = Mobile (Bottom nav, scaled content)
640-768px = Tablet (Transitioning to desktop)  
> 768px  = Desktop (Full layout)
```

## 🎯 Key Classes

### Tailwind Classes Added:
- `hidden md:flex` - Hide on mobile, show on desktop
- `md:hidden` - Show on mobile, hide on desktop
- `pb-safe` - Safe area padding for notched devices

### CSS Transforms:
```css
@media (max-width: 640px) {
  .card-container {
    transform: scale(0.85);
  }
}
```

## 🔍 Quick Test

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone 12 Pro (390x844)
4. Navigate to /app/fission
5. Verify:
   - All 3 boxes visible
   - Bottom nav present
   - Header shows logo + menu
   - No scrolling needed

## 📊 Files Changed

| Type | Count | Examples |
|------|-------|----------|
| Created | 5 | MobileBottomNav, docs |
| Modified | 10 | Header, Footer, AppPage |
| CSS | 5 | CardContainer, TokenBox, globals |
| Docs | 3 | Testing guide, diagrams |

## 🎨 Symbol Guide

- ⚛️ Fission (atomic split)
- 🔗 Fusion (atomic join)
- β⁻ Beta decay minus (transmute to gold)
- β⁺ Beta decay plus (transmute from gold)

## 🚀 Run & Test

```bash
npm run dev
# Open http://localhost:3000
# Test on mobile viewport
```

## 💡 Pro Tips

1. **Use Real Devices**: Test on actual phones when possible
2. **Check Safe Areas**: Test on iPhone with notch
3. **Input Fields**: Should be 16px to prevent iOS zoom
4. **Touch Targets**: Minimum 44x44px for buttons
5. **No Horizontal Scroll**: Content must fit viewport width

## 📖 Full Documentation

- `SOLUTION_SUMMARY.md` - Complete overview
- `MOBILE_UX_IMPROVEMENTS.md` - Technical details
- `MOBILE_TESTING_GUIDE.md` - Testing procedures
- `MOBILE_UX_DIAGRAM.txt` - Visual comparison

## ✅ Verification Checklist

- [ ] Bottom navigation visible on mobile
- [ ] 4 equal-sized buttons present
- [ ] All content fits without scrolling
- [ ] ERG amount visible during signing
- [ ] Header simplified (logo + menu)
- [ ] Footer hidden on mobile
- [ ] Menu contains docs/social links
- [ ] No TypeScript errors
- [ ] No horizontal scroll
- [ ] Works on 320px width

---

**Need Help?** Check MOBILE_TESTING_GUIDE.md for detailed test cases.

**Found a Bug?** Check get_errors output and console logs.

**Ready to Deploy?** Run `npm run build` to verify production build.
