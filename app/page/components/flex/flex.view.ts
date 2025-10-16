namespace $.$$ {
	export class $ds_app_page_components_flex extends $.$ds_app_page_components_flex {

		@$mol_mem
		showcase_cells() {
			return Array.from( { length: 9 }, ( _, index ) =>
				this.Showcase_cell( index )
			)
		}

		// Tree editor mode (без URL синка)
		@$mol_mem
		raw( next?: boolean ) {
			return next ?? true
		}

		// Редактор: tree или text
		@$mol_mem
		editor_body() {
			return this.raw()
				? [ this.Source_text() ]
				: [ this.Source_tree() ]
		}

		// Исходный код (локально, без URL)
		@$mol_mem
		source( next?: string ) {
			const defaultCode = `Showcase_cells_flex $ds_flex
	justify_content \\center
	align_items \\center
	wrap \\wrap
	sub /
		<= Item $ds_surface
			colors \\high

`

			return next ?? defaultCode
		}

		// Tree представление
		@$mol_mem
		source_tree( next?: $mol_tree2 ) {
			return this.$.$mol_tree2_from_string( this.source( next?.toString() ) )
		}

		// Парсинг view.tree и применение к Showcase_cells_flex
		@$mol_mem
		parsed_props() {

			try {
				const tree = this.source_tree().kids[ 0 ]

				const props: Record<string, string> = {}

				// console.log( 'tree', tree, props )
				// Ищем свойства в tree
				for( const kid of tree.kids[ 0 ].kids ) {
					const name = kid.type
					const value = kid.value || kid.kids[ 0 ]?.value || ''

					if( name === 'justify_content' ) props.justify_content = value
					if( name === 'align_items' ) props.align_items = value
					if( name === 'wrap' ) props.wrap = value
					if( name === 'direction' ) props.direction = value
				}

				// console.log( 'parsed_props', tree, props )
				return props
			} catch {
				return {}
			}
		}

		// Применяем свойства к компоненту
		@$mol_mem
		showcase_cells_flex() {
			try {
				const viewTree = this.source()
				console.log( viewTree )

				// Компилируем view.tree → JS
				const tree = this.$.$mol_tree2_from_string( viewTree, '.view.tree' )
				console.log( 'tree', tree )
				const js_tree = this.$.$mol_view_tree2_to_js( tree )
				console.log( 'js_tree', js_tree )
				const js_text = this.$.$mol_tree2_js_to_text( js_tree )
				console.log( 'js_text', js_text )
				const js_code = this.$.$mol_tree2_text_to_string_mapped_js( js_text )
				console.log( 'js_code', js_code )
				// Выполняем в РЕАЛЬНОМ контексте this.$
				// eval здесь имеет доступ ко всем $ds_flex, $ds_surface и т.д.
				const q = eval( js_code )
				console.log( 'q', q )
				// Теперь this.$.Showcase_cells_flex должен существовать
				const DynamicClass = ( this.$ as any ).Showcase_cells_flex
				console.log( 'DynamicClass', DynamicClass )
				// if( !DynamicClass ) {
				// 	console.error( 'Failed to create dynamic component' )
				// 	return super.Showcase_cells_flex()
				// }

				// Создаём экземпляр
				const qq = new DynamicClass()
				console.log( 'qq', qq )
				return qq

			} catch( e ) {
				console.error( 'Compilation error:', e )
				// return super.Showcase_cells_flex()
			}
		}
	}
}
