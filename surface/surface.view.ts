namespace $.$$ {
	// В абсолюте эти типы должны быть выведены из палитры которую опльзак настроил. 
	// То есть ему просто не нравятся такие названия
	// Ему не хватает допустим quaternary или quinary и тд. цветов внезапно в палитре
	// То он просто добавляет новую строчку в конфигураторе и всё выводится
	export type $eve_surface_color = typeof $eve_surface.COLORS[ number ]
	export type $eve_surface_color_surface_level = typeof $eve_surface.COLORS_SURFACE_LEVELS[ number ]
	export type $eve_surface_color_brand = typeof $eve_surface.COLORS_BRAND[ number ]

	export type $eve_surface_size = typeof $eve_surface.SIZES[ number ]
	export type $eve_surface_state_modifiers = typeof $eve_surface.STATE_MODIFIERS[ number ]
	export type $eve_surface_variant = typeof $eve_surface.VARIANTS[ number ]

	export class $eve_surface extends $.$eve_surface {

		/**
		 * Foundations: basic state modifiers
		 */
		static readonly STATE_MODIFIERS = [
			'enabled',
			'hovered',
			'pressed',
			'disabled',
			'loading'
		] as const

		// ===============================
		// Foundations: colors palette
		// ===============================

		/**
		 * Foundations: brand colors
		 */
		static readonly COLORS_BRAND = [
			'primary',
			'secondary',
			'tertiary',
			'danger',
			'warning',
			'success',
			'info',
		] as const


		/**
		 * Foundations: surface levels
		 */
		static readonly COLORS_SURFACE_LEVELS = [
			'lowest',
			'low',
			'medium',
			'high',
			'highest'
		] as const

		/**
		 * Foundations: all colors
		 */
		static readonly COLORS = [
			...$eve_surface.COLORS_BRAND,
			...$eve_surface.COLORS_SURFACE_LEVELS
		] as const

		// ===============================

		/**
		 * Foundations: sizes presets
		 */
		static readonly SIZES = [
			'xs',
			's',
			'm',
			'l',
			'xl'
		] as const

	/**
	 * Foundations: appearances palette
	 */
	static readonly VARIANTS = [
		'solid',
		'outline',
		'soft', // antd 'filled' аналог. soft - куда более понятно. Мягкий background, немного прозрачная поверхность
		'ghost', // transparent enabled, но при hover и pressed что-то вроде soft
		'text' // всегда прозрачный фон, только цветной текст (как antd text button)
	] as const

		// ===============================

		// Возможно в выгрузке тогда и мапки с дефолтами надо будет делать
		override attr() {
			const fqnPrefix = 'eve_surface_'

			const attrs: Record<string, any> = {
				...super.attr(),
				[ `${ fqnPrefix }color` ]: this.colors(),
				[ `${ fqnPrefix }interactive` ]: this.interactive(),
				[ `${ fqnPrefix }size` ]: this.size(),
				[ `${ fqnPrefix }variant` ]: this.variant(),
				[ `${ fqnPrefix }state` ]: this.state(),
			}

			return attrs
		}

		@$mol_mem
		state( next?: $eve_surface_state_modifiers ): $eve_surface_state_modifiers | undefined {
			return next
		}

		@$mol_mem
		colors( next?: $eve_surface_color ): $eve_surface_color | undefined {
			return next
		}

		@$mol_mem
		variant( next?: $eve_surface_variant ): $eve_surface_variant {
			return next ?? 'solid'
		}

		/**
		 * Whether the surface is interactive. If true, the surface will be visually clickable and will have a hover & pressed states.
		 */
		@$mol_mem
		interactive( next?: boolean ): boolean | undefined {

			return next
		}

		// Возможно это будет лучше вынести в какой-нибудь компонент Controls,
		// но пока не видно нужды в его выделении. 
		@$mol_mem
		size( next?: $eve_surface_size ): $eve_surface_size | undefined {
			return next
		}
	}
}
