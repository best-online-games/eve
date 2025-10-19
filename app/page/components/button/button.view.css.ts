namespace $.$$ {
    const { rem, px, vh } = $mol_style_unit

    $mol_style_define( $ds_app_page_components_button, {
        Preview_card: {
            minHeight: vh( 40 ),
            padding: rem( 2 ),
        },
        Live_button: {
            // Button will inherit styles from $ds_button
        },
        Editor_body: {
            flex: {
                grow: 1,
            },
            minWidth: px( 300 ),
        },
        Source_text: {
            minHeight: vh( 30 ),
        },
    } )
}

