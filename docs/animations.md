# Starbright Lab - Animation Guidelines

This document provides detailed specifications for animations across the Starbright Lab website. All animations should enhance the retro-futurist aesthetic while maintaining performance and accessibility.

## Animation Principles

### 1. Enhance Retro-Futurism

Animations should reinforce the 1950s vision of the future by mimicking:
- Analog mechanics (gears, rotations, sweeping motions)
- Atomic-age energy (pulses, glows, starbursts)
- Space-age movement (orbital paths, shooting stars, rocket trajectories)
- Radar and scanner effects (sweeping lines, pinging dots)

### 2. Purposeful Movement

Every animation should have clear intent:
- **Orientation**: Guide users through the interface
- **Feedback**: Confirm user actions
- **Attraction**: Draw attention to important elements
- **Storytelling**: Convey the brand narrative

### 3. Performance First

Animations should be:
- Optimized for mobile devices
- Battery-conscious
- Minimal DOM manipulation
- GPU-accelerated where possible

### 4. Accessible Motion

All animations must:
- Respect the prefers-reduced-motion setting
- Avoid rapid flashing (prevent seizure triggers)
- Provide static alternatives for essential content
- Never block access to content

## Animation Categories

### 1. Micro-Interactions

Small, immediate feedback animations:

| Element | Animation | Duration | Easing | Trigger | Notes |
|---------|-----------|----------|--------|---------|-------|
| Button | Scale + color shift | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Hover/focus | Scale to 1.05x |
| Form input | Border glow | 300ms | cubic-bezier(0, 0, 0.2, 1) | Focus | Subtle pulse effect |
| Icon button | Rotate + scale | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Hover | 10° clockwise rotation |
| Menu item | Atomic dot appearance | 200ms | cubic-bezier(0, 0, 0.2, 1) | Hover/active | Indicator appears under text |
| Toggle | Orbital shift | 250ms | cubic-bezier(0.4, 0, 0.2, 1) | Click | Circle travels in arc path |

### 2. Page Transitions

Transitions between pages/sections:

| Transition Type | Animation | Duration | Easing | Trigger | Notes |
|-----------------|-----------|----------|--------|---------|-------|
| Page entry | Fade up + scale | 600ms | cubic-bezier(0, 0, 0.2, 1) | Navigation | Elements stagger by 100ms |
| Page exit | Fade out | 400ms | cubic-bezier(0.4, 0, 1, 1) | Navigation | Quick exit |
| Section scroll | Parallax elements | Scroll-based | Linear | Scroll | Subtle depth effect |
| Modal open | Scale + atomic pulse | 400ms | cubic-bezier(0, 0, 0.2, 1.4) | Click | Elastic finish |
| Modal close | Fade out + shrink | 300ms | cubic-bezier(0.4, 0, 1, 1) | Click | Quick exit |

### 3. Decorative Animations

Ambient animations that enhance atmosphere:

| Element | Animation | Duration | Easing | Behavior | Notes |
|---------|-----------|----------|--------|----------|-------|
| Comet Trail | Diagonal path + fade | 6s | ease-in-out | Repeats every 10-30s, random delay | Randomized size and path |
| Starbursts | Pulse + rotate | 3s | ease-in-out | Continuous pulsing | Subtle scale 0.95x to 1.05x |
| Orbit Elements | Circular path | 20s | linear | Continuous rotation | Planets/satellites around central element |
| Atomic Pulse | Radial wave | 2s | ease-in-out | Repeats every 3-5s | Emanates from key elements |
| Parallax Stars | Depth movement | Scroll-based | Linear | Moves on scroll | Background elements at different speeds |

### 4. Loading States

Special animations for data loading and transitions:

| Element | Animation | Duration | Easing | Behavior | Notes |
|---------|-----------|----------|--------|----------|-------|
| Primary loader | Orbital spin | Continuous | linear | Continuous until content loads | Atom with orbiting elements |
| Inline loader | Dot pulsing | 1.5s | ease-in-out | Continuous during load | Three dots with staggered pulsing |
| Progress bar | Radar sweep | Based on progress | ease-out | Maps to actual progress | Combines progress bar with scan line |
| Button loading | Atomic pulse | 1.5s | ease-in-out | Replaces button text | Maintains button dimensions |
| Skeleton screens | Gradient sweep | 1.5s | linear | Continuous until content loads | Subtle left-to-right gradient |

## Animation Performance Guidelines

### Critical Performance Metrics

- **Animation fps target**: 60fps on high-end devices, 30fps minimum on low-end
- **JavaScript main thread budget**: < 50ms per frame
- **Battery impact**: Reduce animation complexity on mobile and when battery is low
- **Memory usage**: Avoid memory leaks from continuous animations

### Optimization Techniques

1. **CSS over JavaScript**
   - Use CSS animations and transitions whenever possible
   - Utilize will-change property sparingly for complex animations

2. **GPU Acceleration**
   - Use transform and opacity for animations
   - Avoid animating layout properties (width, height, top, left)
   - Create new composite layers only when necessary

3. **Request Animation Frame**
   - Use requestAnimationFrame for JavaScript animations
   - Batch DOM updates
   - Debounce scroll events

4. **Mobile Considerations**
   - Reduce animation complexity on mobile devices
   - Implement battery-aware throttling
   - Test on representative low-end devices

## Accessibility Considerations

### Prefers Reduced Motion

Always respect the `prefers-reduced-motion` media query. Implementation approaches:

1. **Disable Non-Essential Animations**
   - Remove decorative animations entirely
   - Simplify transitional animations

2. **Provide Alternatives**
   - Replace motion with opacity changes
   - Use static indicators instead of animated ones

3. **Reduce Intensity**
   - Decrease animation distance
   - Slow down timing
   - Simplify easing functions

### Motion Testing Checklist

- Test with prefers-reduced-motion simulator
- Verify all animations can be disabled
- Ensure no content is only conveyed through animation
- Check that animations don't block accessibility of content
- Validate animations don't cause motion sickness (parallax effects especially)

## Animation By Page/Section

Different sections of the site should utilize specific animation approaches:

### Homepage

- **Hero Section**: Comet trails, subtle parallax on scroll
- **Feature Cards**: Staggered entrance, hover scale/tilt
- **Call to Action**: Attention pulse, button hover effect

### About Page

- **Team Member Cards**: Orbital animation around photos
- **Timeline**: Sequential reveal animation on scroll
- **Company Values**: Icon animations on hover/scroll

### Contact Page

- **Form Elements**: Micro-interactions on focus/input
- **Submit Button**: State change animations for loading/success/error
- **Map/Location**: Radar ping animation

## Conclusion

Animations are a critical component of the Starbright Lab retro-futurist experience. By following these guidelines, we ensure animations enhance the user experience while maintaining performance and accessibility standards. All animation implementations should be reviewed against these guidelines and tested on representative devices.

Remember that animation is in service to the overall user experience—it should enhance, not distract from the core functionality and content of the site.
