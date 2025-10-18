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
		// TODO: вынести абстракцию Playground для редактора
		// чтобы потом переиспользовать для других компонентов
		@$mol_mem
		source( next?: string ) {
			const defaultCode = `Live_flex $ds_flex
	- Edit values of Flex component
	justify_content \\center
	align_items \\center
	wrap \\wrap
	sub /
		<= Demo_item $ds_surface
			colors \\medium
			style *
				width \\10vh
				height \\10vh
				position \\absolute
`
			return next ?? defaultCode
		}

		// Tree представление
		@$mol_mem
		source_tree( next?: $mol_tree2 ) {
			return this.$.$mol_tree2_from_string( this.source( next?.toString() ) )
		}

		// Компиляция view.tree → JS (по примеру studio.hyoo.ru)
		@$mol_mem
		live_flex_code() {
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
		override Live_flex() {
			try {
				// Выполняем скомпилированный код в контексте this.$
				const $ = this.$
				eval( this.live_flex_code() )

				// Получаем динамически созданный класс
				const DynamicClass = ( this.$ as any ).Live_flex

				if( !DynamicClass ) {
					this.$.$mol_fail_hidden( new Error( 'Failed to create dynamic component from view.tree' ) )
					return super.Live_flex()
				}

				// Создаём экземпляр с правильным ambient контекстом
				const instance = new DynamicClass()
				instance[ $mol_ambient_ref ] = this.$

				// Расширяем sub: добавляем showcase_cells реактивно
				// НЕ вызываем original_sub заранее, только при каждом рендере!
				const original_sub = instance.sub.bind( instance )
				instance.sub = () => {
					const original = original_sub()
					const cells = this.showcase_cells()
					return [ ...original, ...cells ]
				}

				return instance

			} catch( error: any ) {
				// Обработка ошибок компиляции/выполнения
				this.$.$mol_fail_log( error )
				return super.Live_flex()
			}
		}
	}
}
