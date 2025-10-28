# Eve Options Components

Base components and plugins for option selection UIs.

## Plugin Architecture

### `$eve_options_single_plugin`

**Plugin** for single-selection option groups. Mixes behavior into any component.

Used by:
- `$eve_tab_group` - Tab navigation
- `$eve_segmented` - Segmented control (iOS style)  
- `$eve_input_logical_radio_group` - Radio button group
- Future: `$eve_select` - Single-select dropdown

**Features:**
- Dictionary of options (key → label)
- Current selected value (local reactive state by default)
- Automatic selection state checking
- Click handling to change selection

**Usage:**
```tree
$my_options_group $mol_view
    plugins /
        <= Options $eve_options_single_plugin
            options *
                grid \Grid
                list \List
```

**API:**
```typescript
// Plugin provides these methods:
// - options(): Record<string, string>
// - value(next?: string): string  
// - option_ids(): string[]
// - option_title(id: string): string
// - option_checked(id: string): boolean
// - option_click(id: string, event?: Event)
```

## Components Using the Plugin

### `$eve_tab_group`
```tree
$eve_tab_group $eve_flex
    plugins /
        <= Options $eve_options_single_plugin
            options *
                home \Home
                profile \Profile
```

### `$eve_segmented`
```tree
$eve_segmented $eve_surface
    plugins /
        <= Options $eve_options_single_plugin
            options *
                grid \Grid
                list \List
```

### `$eve_input_logical_radio_group`
```tree
$eve_input_logical_radio_group $eve_flex
    plugins /
        <= Options $eve_options_single_plugin
            options *
                option1 \First Option
                option2 \Second Option
```

## Design Pattern

**Plugin-based composition** instead of inheritance:
- Common behavior is mixed in via `$eve_options_single_plugin`
- Each component focuses on its unique UI/layout concerns
- No inheritance chains - just composition
- Easy to add the same behavior to any component

## Future: Multiple Selection

**`$eve_options_multiple_plugin`** - for `checkbox_group`, `multiselect`:
- Uses `dictionary()` instead of `value()`
- Stores array of selected values
- Allows multiple selections
