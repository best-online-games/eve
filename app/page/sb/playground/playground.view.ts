namespace $.$$ {

	export class $eve_app_page_sb_playground extends $.$eve_app_page_sb_playground {

		// Имя динамического компонента (теперь берётся из view.tree)
		// component_name(): string - определено в view.tree

		// Дефолтный код (теперь берётся из view.tree)
		// default_source(): string - определено в view.tree

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
			return next ?? this.default_source()
		}

		// Tree представление
		@$mol_mem
		source_tree( next?: $mol_tree2 ) {
			return this.$.$mol_tree2_from_string( this.source( next?.toString() ) )
		}

		// Компиляция view.tree → JS
		@$mol_mem
		live_component_code() {
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
		Live_component(): $eve_surface {
			try {
				// Выполняем скомпилированный код в контексте this.$
				const $ = this.$
				eval( this.live_component_code() )

				// Получаем динамически созданный класс
				const componentName = this.component_name()
				const DynamicClass = ( this.$ as any )[ componentName ]

				if( !DynamicClass ) {
					this.$.$mol_fail_hidden( new Error( `Failed to create dynamic component: ${ componentName }` ) )
					return new this.$.$eve_surface()
				}

				// Создаём экземпляр с правильным ambient контекстом
				const instance = new DynamicClass()
				instance[ $mol_ambient_ref ] = this.$

				// Хук для дополнительной настройки компонента (переопределяется в наследниках)
				return this.customize_live_component( instance )

			} catch( error: any ) {
				// Обработка ошибок компиляции/выполнения
				this.$.$mol_fail_log( error )
				return new this.$.$eve_surface()
			}
		}

		// Хук для кастомизации динамического компонента (переопределяется в наследниках)
		customize_live_component( instance: any ): $eve_surface {
			return instance
		}

	}

}

