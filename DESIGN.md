# DESIGN.md - Clone CRM Acto

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| primary | #2563EB | Links, active states, buttons |
| background | #F8FAFC | Sidebar background |
| surface | #FFFFFF | Cards, header |
| border | #E2E8F0 | Card borders, dividers |
| text-primary | #1E293B | Headings, primary text |
| text-secondary | #64748B | Secondary text, labels |
| text-muted | #94A3B8 | Placeholders, hints |
| success | #22C55E | Success states |
| warning | #F59E0B | Warning, risk indicators |
| danger | #EF4444 | Errors, delete actions |

### Typography

- **Font Family:** System sans (Inter fallback)
- **Headings:** 
  - H1: 24px, font-weight 700
  - H2: 20px, font-weight 600
  - H3: 16px, font-weight 600
- **Body:** 14px, font-weight 400
- **Small:** 12px, font-weight 400

### Spacing

- Base unit: 4px
- Card padding: 20px
- Section gap: 24px
- Component gap: 12px

### Components

#### Cards
- Background: white
- Border: 1px solid #E2E8F0
- Border radius: 12px
- Padding: 20px

#### Buttons
- Border radius: 8px
- Height: 32px (sm), 36px (default), 40px (lg)

#### Inputs
- Border: 1px solid #E2E8F0
- Border radius: 8px
- Height: 36px
- Focus: ring 2px #2563EB

### Layout

- Sidebar width: 260px (collapsed: 72px)
- Header height: 56px
- Main content: fluid, max-width none
- Grid: 3 columns (2 main + 1 sidebar)
