# $eve_radio

Radio button component based on `$mol_switch`.

## Features

- Based on `$mol_switch` for state management
- Uses `$eve_flex` for layout
- Circle indicator with inner dot for checked state
- Smooth transitions
- Hover effects
- Theme-aware styling using `$mol_theme`

## Usage

```tree
My_radio $eve_radio
	options *
		option1 \First Option
		option2 \Second Option
		option3 \Third Option
	value? \option1
```

## Props

Inherits all props from `$mol_switch`:

- `options` - Dictionary of option values and labels
- `value?` - Currently selected value (two-way binding)
- `option_title*` - Override label for specific option

## Styling

The component uses CSS custom properties from `$mol_theme`:
- `$mol_theme.control` - Border color for unselected state
- `$mol_theme.current` - Border and inner circle color for selected/hover states

## Structure

- Circle container (outer circle)
- Circle_inner (inner filled circle, visible when checked)
- option_title (label text)

