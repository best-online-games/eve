namespace $.$$ {

	export class $eve_app_page_sb_playground_flex extends $.$eve_app_page_sb_playground_flex {

		component_name(): string {
			return 'Live_flex'
		}

		default_source(): string {
			return `Live_flex $eve_flex
	- Edit values of Flex component
	justify_content \\center
	align_items \\center
	wrap \\wrap
	sub /
		<= Demo_item $eve_surface
			colors \\medium
			style *
				width \\10vh
				height \\10vh
				position \\absolute
`
		}

		// Поле для showcase_cells (инжектится извне)
		_showcase_cells?: any[]

		// Переопределяем customize для добавления showcase_cells
		customize_live_component( instance: any ): $mol_view {
			if( this._showcase_cells ) {
				const original_sub = instance.sub.bind( instance )
				instance.sub = () => {
					const original = original_sub()
					return [ ...original, ...this._showcase_cells! ]
				}
			}

			return instance
		}

	}

}

