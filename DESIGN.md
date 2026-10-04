# AcmeMed Design System

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | #F0FDFA | Light backgrounds, subtle fills |
| `primary-100` | #CCFBF1 | Hover states, light accents |
| `primary-200` | #99F6E4 | Borders, dividers |
| `primary-300` | #5EEAD4 | Icons, secondary elements |
| `primary-400` | #2DD4BA | Interactive elements |
| `primary-500` | #14B8A6 | Primary buttons, links |
| `primary-600` | #0D9488 | Primary hover state |
| `primary-700` | #0F766E | Active states, emphasis |
| `primary-800` | #115E59 | Dark accents |
| `primary-900` | #134E4A | Darkest primary |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | #FAFAFA | Page background |
| `neutral-100` | #F5F5F5 | Card backgrounds |
| `neutral-200` | #E5E5E5 | Borders |
| `neutral-300` | #D4D4D4 | Disabled borders |
| `neutral-400` | #A3A3A3 | Placeholder text |
| `neutral-500` | #737373 | Secondary text |
| `neutral-600` | #525252 | Body text |
| `neutral-700` | #404040 | Headings |
| `neutral-800` | #262626 | Dark headings |
| `neutral-900` | #171717 | Darkest text |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success-50` | #ECFDF5 | Success backgrounds |
| `success-100` | #D1FAE5 | Success light |
| `success-500` | #10B981 | Success primary |
| `success-600` | #059669 | Success hover |
| `success-700` | #047857 | Success dark |
| `error-50` | #FEF2F2 | Error backgrounds |
| `error-100` | #FEE2E2 | Error light |
| `error-500` | #EF4444 | Error primary |
| `error-600` | #DC2626 | Error hover |
| `error-700` | #B91C1C | Error dark |
| `warning-50` | #FFFBEB | Warning backgrounds |
| `warning-100` | #FEF3C7 | Warning light |
| `warning-500` | #F59E0B | Warning primary |
| `warning-600` | #D97706 | Warning hover |
| `warning-700` | #B45309 | Warning dark |

### Lecturer Badge Colors
| Lecturer | Background | Text |
|----------|-----------|------|
| Dr. Ekeke | #F5F3FF | #7C3AED |
| Dr. Ogbuagu | #EFF6FF | #2563EB |
| Dr. Asika | #FFFBEB | #D97706 |
| Dr. Okoroukwu | #ECFDF5 | #059669 |
| Dr. Anele | #FEF2F2 | #DC2626 |
| Prof. Clinton | #ECFEFF | #0891B2 |

## Typography

### Font Family
- **Primary:** "Plus Jakarta Sans" (Google Fonts)
- **Fallback:** Inter, system-ui, sans-serif

### Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Display | 2.5rem (40px) | 800 | 1.1 |
| H1 | 2rem (32px) | 700 | 1.2 |
| H2 | 1.5rem (24px) | 700 | 1.3 |
| H3 | 1.25rem (20px) | 600 | 1.4 |
| H4 | 1.125rem (18px) | 600 | 1.4 |
| Body Large | 1.0625rem (17px) | 400 | 1.6 |
| Body | 1rem (16px) | 400 | 1.6 |
| Body Small | 0.875rem (14px) | 400 | 1.5 |
| Caption | 0.75rem (12px) | 500 | 1.4 |
| Overline | 0.6875rem (11px) | 600 | 1.3 |

## Spacing

### Base Unit: 4px
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing |
| `space-2` | 8px | Small gaps |
| `space-3` | 12px | Default gaps |
| `space-4` | 16px | Standard padding |
| `space-5` | 20px | Comfortable padding |
| `space-6` | 24px | Section spacing |
| `space-8` | 32px | Large spacing |
| `space-10` | 40px | Section breaks |
| `space-12` | 48px | Large breaks |
| `space-16` | 64px | Page sections |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Small elements (badges, tags) |
| `radius-md` | 8px | Inputs, small cards |
| `radius-lg` | 12px | Cards, buttons |
| `radius-xl` | 16px | Large cards, modals |
| `radius-2xl` | 24px | Feature cards |
| `radius-full` | 9999px | Pills, avatars |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | 0 1px 2px 0 rgb(0 0 0 / 0.05) | Subtle elevation |
| `shadow-md` | 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05) | Cards |
| `shadow-lg` | 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04) | Elevated cards |
| `shadow-xl` | 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.04) | Modals, dropdowns |
| `shadow-glow` | 0 0 0 3px rgb(20 184 166 / 0.15) | Focus states |

## Components

### Buttons

#### Primary Button
- Background: `primary-600`
- Text: white
- Padding: 12px 24px
- Radius: `radius-lg`
- Font: 600 weight, 14px
- Hover: `primary-700` + `shadow-md`
- Active: `primary-800`
- Focus: `shadow-glow`

#### Secondary Button
- Background: white
- Border: 1.5px solid `neutral-200`
- Text: `neutral-700`
- Padding: 12px 24px
- Radius: `radius-lg`
- Font: 600 weight, 14px
- Hover: `neutral-50` background + `neutral-300` border

#### Ghost Button
- Background: transparent
- Text: `primary-600`
- Padding: 12px 24px
- Radius: `radius-lg`
- Font: 600 weight, 14px
- Hover: `primary-50` background

### Inputs
- Background: white
- Border: 1.5px solid `neutral-200`
- Padding: 12px 16px
- Radius: `radius-lg`
- Font: 400 weight, 15px
- Placeholder: `neutral-400`
- Focus: `primary-500` border + `shadow-glow`
- Hover: `neutral-300` border

### Cards
- Background: white
- Radius: `radius-xl`
- Shadow: `shadow-md`
- Padding: 24px
- Border: 1px solid `neutral-100`
- Hover: `shadow-lg` + translateY(-1px)

### Badges
- Padding: 4px 10px
- Radius: `radius-full`
- Font: 600 weight, 11px
- Letter-spacing: 0.02em
- Uppercase for labels

## Layout

### Max Widths
- Content: 640px (mobile-first reading)
- Dashboard: 720px
- Forms: 400px

### Breakpoints
- Mobile: 0-640px (base)
- Tablet: 641-1024px
- Desktop: 1025px+

## Motion

### Transitions
- Fast: 150ms ease-out (hover, focus)
- Normal: 200ms ease-out (state changes)
- Slow: 300ms ease-out (page transitions)

### Animations
- Fade in: opacity 0 → 1, 200ms
- Slide up: translateY(8px) → 0, 200ms
- Scale in: scale(0.95) → 1, 150ms
