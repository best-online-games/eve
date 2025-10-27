# $eve_tab

Tab button component for navigation between views.

## Features

- **Dynamic styling** - Changes variant when checked/unchecked
- **Surface-based** - Uses `$eve_button` with `$eve_surface` tokens
- **Accessibility** - Proper ARIA attributes (`role="tab"`, `aria-selected`)
- **Visual feedback** - Border bottom highlight when active

## Usage

### Single Tab (rarely used standalone)

```tree
<= My_tab $eve_tab
    label \Home
    checked? <=> home_active? true
```

### Tab Group (recommended)

```tree
<= Navigation_tabs $eve_tab_group
    options *
        home \Home
        profile \Profile
        settings \Settings
    value? <=> current_page? \home
```

## Component Variants

### `$eve_tab`
Single tab button (similar to radio button)

**Properties:**
- **`label : string`** - Tab text
- **`checked : boolean`** - Active state
- **`disabled : boolean`** - Disabled state

**States:**
- Unchecked: `ghost` variant (invisible background)
- Checked: `soft` variant with border bottom highlight

### `$eve_tab_group`
Group of tabs with shared state (similar to radio_group)

**Properties:**
- **`options : Record<string, string>`** - Tab ID to label mapping
- **`value : string`** - Currently selected tab ID

**Features:**
- Automatic tab generation from options
- Session state persistence
- Horizontal layout with border bottom

## Styling

### Tab Button
- Min height: `2.5rem` (40px) - adequate touch target
- Padding: `0.75rem` horizontal, `1rem` vertical
- Border radius: `0.5rem` top corners only
- Font weight: `500` (medium)
- Checked state: border bottom `0.125rem` (2px)

### Tab Group
- Horizontal flex layout
- Border bottom separator
- No gaps between tabs

## Based On

- `$eve_button` - Interactive button base
- `$eve_surface` - Theming system
- `$eve_flex` - Layout for group

## Examples

### Simple Navigation

```tree
<= Pages $eve_tab_group
    options *
        dashboard \Dashboard
        analytics \Analytics
        reports \Reports
    value? <=> active_page? \dashboard
```

### With Content Switching

```tree
<= Tabs $eve_tab_group
    value? <=> current_tab? \overview
    
<= Content $mol_switch
    value <= current_tab
    options *
        overview <= Overview_panel $mol_view
        details <= Details_panel $mol_view
        history <= History_panel $mol_view
```

## Accessibility

- Uses `role="tab"` and `role="tablist"`
- Sets `aria-selected` based on checked state
- Keyboard navigation support through `$eve_button`

## See Also

- `$eve_button` - Button component
- `$eve_input_logical_radio` - Radio buttons (similar pattern)
- `$mol_deck` - Alternative tab component from $mol

