# $eve_options_single

Abstract base component for single-selection option groups.

This component provides common behavior for:
- Radio groups (`radio_group`)
- Segmented controls (`segmented`)
- Tab groups (`tab_group`)
- Single-select dropdowns (`select`)

## Design

Inspired by `$mol_switch`, this component encapsulates the pattern of:
1. Dictionary of options (key -> label)
2. Current selected value
3. Logic for checking selection state
4. Logic for handling clicks

## API

### Properties

**`options(): Record<string, string>`**

Dictionary of available options { id: label }

**`value( next?: string ): string`**

Current selected value (stored in session state)

**`option_value( id: string ): string`**

Get option value by ID (defaults to id itself)

**`option_title( id: string ): string`**

Get option label by ID (defaults to options[id] || id)

**`option_checked( id: string ): boolean`**

Check if option is selected

**`option_click( id: string, event?: Event )`**

Handle option click event

## Usage

Extend this class to implement specific UI components:

```tree
$eve_tab_group $eve_options_single
    sub <= tabs /
        <= Tab* $eve_tab
            label <= tab_label* \
            checked? <= tab_checked* false
            event_click?event <=> tab_click*?event null
```

```typescript
export class $eve_tab_group extends $.$eve_tab_group {
    
    tab_label( id: string ) {
        return this.option_title( id )
    }
    
    tab_checked( id: string ) {
        return this.option_checked( id )
    }
    
    tab_click( id: string, event?: Event ) {
        return this.option_click( id, event )
    }
    
}
```

## Future: Multiple Selection

For multiple selection (checkboxes, multi-select), use `$eve_options_multiple` which would:
- Use `dictionary()` instead of `value()`
- Store array of selected values
- Allow multiple selections
