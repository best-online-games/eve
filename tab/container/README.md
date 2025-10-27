# $eve_tab_container

Container component that displays tabs and switches content based on the selected tab.

Similar to `$mol_book2_catalog` pattern, but designed for inline tab navigation.

## Features

- **Dictionary-based spreads**: Pass content as a dictionary
- **Automatic tab generation**: Tabs created from spread keys
- **Type-safe switching**: Content switches based on active tab
- **Customizable titles**: Override `spread_title()` for custom labels

## Usage

### Basic Example

```tree
<= Editor $eve_tab_container
    tab? <=> active_tab? \source
    spreads *
        source <= Source_panel $mol_view
            sub / <= Source_editor
        props <= Props_panel $mol_view
            sub / <= Props_form
```

### With Custom Titles

```typescript
// In your component's TypeScript file
spread_title( id: string ) {
    const titles: Record<string, string> = {
        source: 'Source Code',
        props: 'Properties',
        settings: 'Settings',
    }
    return titles[ id ] ?? super.spread_title( id )
}
```

### Playground Example

```tree
<= Code_tabs $eve_tab_container
    tab? <=> code_tab? \source
    spreads *
        source <= Source_editor $eve_surface
            colors \lowest
            sub /
                <= Code_textarea $mol_textarea
        props <= Props_editor $eve_surface
            colors \lowest
            sub /
                <= Props_form $mol_form
```

## Properties

### `tab?: string`

Currently active tab ID. Bindable.

```tree
tab? <=> active_tab? \overview
```

### `spreads: Record<string, $mol_view>`

Dictionary mapping tab IDs to their content components.

```tree
spreads *
    overview <= Overview_content
    details <= Details_content
    history <= History_content
```

### `spread_title(id: string): string`

Returns the display title for a tab. Override to customize tab labels.

**Default behavior**: Capitalizes the first letter of the ID.

## Methods

### `spread_ids(): string[]`

Returns array of all spread IDs from the `spreads` dictionary.

### `Spread(id: string): $mol_view | null`

Returns the spread component for the given ID.

### `spread_current(): $mol_view | null`

Returns the currently active spread based on `tab()`.

### `tab_options(): Record<string, string>`

Generates options for `$eve_tab_group` from spread IDs and titles.

### `content_options(): Record<string, $mol_view>`

Generates options for `$mol_switch` from spreads.

## Structure

```
$eve_tab_container
├── Tabs ($eve_tab_group)
│   └── Generated from spreads
└── Content ($mol_switch)
    └── Active spread component
```

## Styling

The component uses flexbox layout:
- Container: `flex-direction: column`, grows to fill space
- Tabs: Fixed height (`flex-shrink: 0`)
- Content: Grows to fill remaining space with overflow hidden

## See Also

- `$eve_tab_group` - Tab navigation component
- `$eve_tab` - Individual tab component
- `$mol_switch` - Content switcher
- `$mol_book2_catalog` - Similar pattern for book layouts

