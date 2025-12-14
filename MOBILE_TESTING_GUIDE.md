# Mobile UX Testing Guide - Issue #10

## Quick Start Testing

### 1. Start the Development Server
```bash
npm run dev
# or
yarn dev
```

### 2. Open in Browser
- Navigate to `http://localhost:3000`
- Open browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)

### 3. Test Devices
Test on the following device profiles:

#### iPhone Models:
- iPhone SE (375x667)
- iPhone 12/13 Pro (390x844)
- iPhone 14 Pro Max (430x932)

#### Android Models:
- Samsung Galaxy S20 (360x800)
- Pixel 5 (393x851)
- Samsung Galaxy S21 Ultra (412x915)

## Test Cases

### ✅ Test Case 1: No Scrolling Required
**Steps:**
1. Open app on mobile device
2. Navigate to `/app/fission`
3. Check all three boxes are visible without scrolling
4. Verify ERG amount box is visible at bottom

**Expected Result:** All content visible, no vertical scroll needed

---

### ✅ Test Case 2: Bottom Navigation
**Steps:**
1. Open app on mobile device
2. Observe bottom navigation bar with 4 buttons
3. Tap each button to navigate
4. Verify active state highlights correctly

**Expected Result:** 
- 4 equal-sized buttons visible
- Active button shows gold highlight
- Navigation works smoothly
- Buttons show: ⚛️ Fission, 🔗 Fusion, β⁻ → GAU, β⁺ → GAUC

---

### ✅ Test Case 3: Mobile Header
**Steps:**
1. Open app on mobile device
2. Verify header shows: Logo (left) + Menu button (right)
3. Verify "Reactor" and "Docs" are NOT visible in header
4. Tap menu button

**Expected Result:**
- Clean header with logo and menu only
- Menu opens from right side
- Shows network picker, wallet connection
- Shows Documentation and YouTube links
- Shows social media icons

---

### ✅ Test Case 4: Footer Hidden on Mobile
**Steps:**
1. Open app on mobile device
2. Scroll to bottom
3. Verify footer is hidden
4. Bottom navigation is visible instead

**Expected Result:** 
- Desktop footer not visible on mobile
- Bottom navigation takes its place

---

### ✅ Test Case 5: Content Scaling
**Steps:**
1. Open app on mobile device (320px width - smallest)
2. Navigate through all 4 sections
3. Verify content is readable and usable
4. Test on larger devices (430px width)

**Expected Result:**
- Content scales appropriately
- Text remains readable
- Buttons remain tappable
- No horizontal scroll

---

### ✅ Test Case 6: Transaction Signing
**Steps:**
1. Connect wallet on mobile device
2. Enter amount for fusion/fission
3. Click "Convert Now"
4. Verify ERG amount box is visible during signing

**Expected Result:**
- All boxes remain visible
- ERG amount clearly displayed
- User can review transaction details
- No scrolling needed to see amounts

---

### ✅ Test Case 7: Landscape Orientation
**Steps:**
1. Open app on mobile device
2. Rotate to landscape orientation
3. Verify content still fits
4. Test navigation

**Expected Result:**
- Content scales down appropriately
- Navigation still accessible
- All boxes visible

---

### ✅ Test Case 8: Touch Targets
**Steps:**
1. Open app on mobile device
2. Tap all buttons in bottom navigation
3. Tap menu items
4. Tap "Convert Now" buttons

**Expected Result:**
- All buttons easily tappable (44x44px minimum)
- No accidental taps
- Good spacing between buttons

---

### ✅ Test Case 9: Input Fields
**Steps:**
1. Open app on mobile device
2. Tap on amount input field
3. Verify keyboard doesn't zoom page
4. Enter numbers

**Expected Result:**
- Input field font-size is 16px
- No unwanted zoom on iOS
- Keyboard appears correctly
- Input is responsive

---

### ✅ Test Case 10: Cross-Browser Testing
**Test on:**
- iOS Safari
- Chrome Mobile
- Firefox Mobile
- Samsung Internet

**Expected Result:** Consistent behavior across all browsers

---

## Responsive Breakpoints to Test

### Mobile (< 640px)
- Bottom navigation visible
- Footer hidden
- Header simplified
- Content scaled to 85%

### Tablet (640px - 768px)
- Desktop footer appears
- Side navigation visible
- Full-size content
- Bottom nav hidden

### Desktop (> 768px)
- Full desktop layout
- Side navigation
- Desktop footer
- Full-size content

## Visual Regression Testing

Take screenshots at these key points:
1. Fission page - 375px width
2. Fusion page - 390px width
3. Transmute to Gold - 412px width
4. Transmute from Gold - 430px width
5. Mobile menu open - 375px width

Compare with design mockups or previous screenshots.

## Performance Testing

### Lighthouse Mobile Audit
Run in Chrome DevTools:
1. Open DevTools
2. Go to Lighthouse tab
3. Select "Mobile"
4. Run audit

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90

## Accessibility Testing

### VoiceOver (iOS)
1. Enable VoiceOver
2. Navigate through app
3. Verify all buttons are labeled
4. Verify navigation is logical

### TalkBack (Android)
1. Enable TalkBack
2. Navigate through app
3. Verify all interactive elements are accessible
4. Verify focus order is correct

## Known Issues & Edge Cases

### iOS Specific:
- Safe area insets properly handled for notched devices
- Input zoom prevented with 16px font size
- Viewport properly configured

### Android Specific:
- Touch targets meet minimum size requirements
- Navigation bar doesn't overlap content

### Small Devices (320px):
- Content scales to 75% on very small screens
- All functionality remains accessible

## Reporting Issues

If you find any issues during testing, report with:
1. Device model and screen size
2. Browser name and version
3. Steps to reproduce
4. Expected vs actual behavior
5. Screenshot if applicable

## Success Criteria

All test cases must pass with:
- ✅ No horizontal scrolling
- ✅ All content visible without vertical scrolling on main screens
- ✅ Bottom navigation functional
- ✅ Header simplified on mobile
- ✅ Footer content accessible via menu
- ✅ Transaction details always visible
- ✅ Touch targets adequately sized
- ✅ Cross-browser compatibility
- ✅ Acceptable performance scores
- ✅ Full accessibility

## Automated Testing Commands

```bash
# Run ESLint
npm run lint

# Build production version
npm run build

# Preview production build
npm run start
```

## Tips for Testing

1. **Use Real Devices:** Test on actual phones when possible
2. **Test Network Conditions:** Use DevTools to simulate slow 3G
3. **Test with Wallet:** Connect actual wallet to test full flow
4. **Test Different Orientations:** Portrait and landscape
5. **Test Touch Interactions:** Tap, swipe, long press
6. **Test Accessibility:** Use screen readers
7. **Test Dark Mode:** If supported by OS

## Resources

- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Safari Web Inspector](https://webkit.org/web-inspector/)
- [Firefox Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/)
