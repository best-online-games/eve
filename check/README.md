# $eve_check

Checkbox UI component based on `$mol_check`.

## Features

- Based on `$mol_check` for state management
- Uses `$eve_flex` for layout
- Check icon indicator for checked state
- Smooth transitions and opacity effects
- Hover effects
- Theme-aware styling using `$mol_theme`

## Usage

```tree
My_checkbox $eve_check
	checked? true
	title \Accept terms and conditions
```

## Props

Inherits all props from `$mol_check`:

- `checked?` - Boolean state (two-way binding)
- `title` - Label text next to checkbox
- `click?` - Click handler (automatically toggles checked state)

## Styling

The component uses CSS custom properties from `$mol_theme`:
- `$mol_theme.control` - Border color for unchecked state
- `$mol_theme.current` - Background and border color for checked state
- `$mol_theme.back` - Icon color

## Structure

- Icon_container (checkbox square container)
- Icon (check mark icon, visible when checked)
- Title (label text)

