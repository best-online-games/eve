# $eve_card

Simple card component with title and content area.

## Features

- **Title section** - Header with title text
- **Content area** - Flexible content container
- **Surface-based** - Uses `$eve_surface` for consistent styling
- **Rounded corners** - Modern card appearance with border radius

## Usage

### Basic Card

```tree
<= My_card $eve_card
    title \Card Title
    content /
        <= Card_text $mol_paragraph
            title \Card content goes here
```

### Card with Multiple Elements

```tree
<= Product_card $eve_card
    title \Product Name
    content /
        <= Product_image $mol_image
            uri \product.jpg
        <= Product_description $mol_paragraph
            title \Product description
        <= Product_price $mol_paragraph
            title \$99.99
        <= Buy_button $eve_button
            sub /
                <= Button_text $mol_paragraph
                    title \Buy Now
```

## Properties

- **`title : string`** - Card title text
- **`content : $mol_view_content`** - Card body content (array of components)
- **`colors : $eve_surface_color`** - Surface color (default: `medium`)
- **`variant : $eve_surface_variant`** - Surface variant (default: `soft`)

## Styling

The card uses:
- Border radius: `0.5rem` (8px)
- Title font weight: `600` (semi-bold)
- Border between head and body using `--mol_theme_line`
- Overflow hidden for clean rounded corners

## Based On

- `$eve_surface` - Base styling and theming
- `$eve_flex` - Body layout
- `$mol_paragraph` - Title text

## See Also

- `$eve_surface` - Surface component documentation
- `$mol_card` - Original $mol card component

