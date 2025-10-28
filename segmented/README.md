# $eve_segmented & $eve_segmented_group

iOS-style segmented control component with animated selection indicator.

## Features

- **Animated sliding plate** - smooth transition between selected segments
- **Radio button based** - uses native form controls for accessibility
- **Flexible content** - supports text, icons, or custom components
- **Surface integration** - inherits size, color, and variant system
- **Keyboard navigation** - full keyboard support via native radio inputs

## Components

### $eve_segmented

Individual segment (radio button) used inside segment groups.

**Props:**
- `value` - unique value for this segment
- `name` - radio group name (shared across segments)
- `checked` - whether this segment is selected
- `content` - array of views to display inside segment

### $eve_segmented_group

Container that manages multiple segments with animated selection.

**Props:**
- `options` - dictionary of `{ value: label }` pairs
- `value?` - currently selected value (two-way binding)
- `size?` - size variant: `xs`, `s`, `m`, `l`, `xl` (default: `m`)
- `colors?` - color variant: `primary`, `secondary`, `neutral`, etc.

## Usage Examples

### Basic text segments

```tree
<= Size_control $eve_segmented_group
    options *
        xs \Extra Small
        s \Small  
        m \Medium
        l \Large
        xl \Extra Large
    value? <=> size? \m
```

### With icons

```tree
<= View_mode $eve_segmented_group
    options *
        list <= List_icon $mol_icon_list
        grid <= Grid_icon $mol_icon_grid
        timeline <= Timeline_icon $mol_icon_timeline
    value? <=> mode? \grid
```

### Mixed content

```tree
<= Format_picker $eve_segmented_group
    option_ids / \bold \italic \underline
    Segment*0 $eve_segmented
        content /
            <= Bold_icon $mol_icon_format_bold
    Segment*1 $eve_segmented
        content /
            <= Italic_icon $mol_icon_format_italic
    Segment*2 $eve_segmented
        content /
            <= Underline_icon $mol_icon_format_underline
    value? <=> format? \bold
```

## Implementation Details

The segment group uses CSS custom properties and transitions to animate a "plate" element that slides behind the selected segment. The position is calculated based on:
- Number of segments in the group
- Index of currently selected segment
- Each segment gets equal width (100% / count)

The plate position updates automatically when `value` changes, creating smooth animated transitions.

## Design System Integration

Segments inherit the eve surface system:
- **Sizes** - xs, s, m (default), l, xl
- **Colors** - neutral, primary, secondary, danger, success, etc.
- **Variants** - solid, flat, outlined, ghost
- **States** - enabled, hover, active, pressed, disabled

The active segment uses the `active` state styling, while other segments remain in default state.

## Accessibility

- Uses native `<input type="radio">` elements
- Proper ARIA roles: `radiogroup` for container, `radio` for segments
- Keyboard navigation: arrow keys, space, tab
- Screen reader support through radio button semantics
- Focus management handled by browser

