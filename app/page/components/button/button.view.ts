namespace $.$$ {

	export class $ds_app_page_components_button extends $.$ds_app_page_components_button {

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
			const defaultCode = `Live_button $ds_button
	- Edit values of Button component
	colors \\primary
	variant \\solid
	size \\md
	sub /
		\\Click Me!
`
			return next ?? defaultCode
		}

		// Tree представление
		@$mol_mem
		source_tree( next?: $mol_tree2 ) {
			return this.$.$mol_tree2_from_string( this.source( next?.toString() ) )
		}

		// Компиляция view.tree → JS
		@$mol_mem
		live_button_code() {
			const tree = this.source_tree()

			// Компилируем view.tree → JS (как в studio.hyoo.ru/studio.view.ts:197-207)
			const js_code = this.$.$mol_tree2_text_to_string_mapped_js(
				this.$.$mol_tree2_js_to_text(
					this.$.$mol_view_tree2_to_js( tree )
				)
			)

			return js_code
		}

		// Динамическая компиляция компонента через eval
		@$mol_mem
		override Live_button() {
			try {
				// Выполняем скомпилированный код в контексте this.$
				const $ = this.$
				eval( this.live_button_code() )

				// Получаем динамически созданный класс
				const DynamicClass = ( this.$ as any ).Live_button

				if( !DynamicClass ) {
					this.$.$mol_fail_hidden( new Error( 'Failed to create dynamic component from view.tree' ) )
					return super.Live_button()
				}

				// Создаём экземпляр с правильным ambient контекстом
				const instance = new DynamicClass()
				instance[ $mol_ambient_ref ] = this.$

				return instance

			} catch( error: any ) {
				// Обработка ошибок компиляции/выполнения
				this.$.$mol_fail_log( error )
				return super.Live_button()
			}
		}

	}

}

