namespace $.$$ {
	// В абсолюте эти типы должны быть выведены из палитры которую опльзак настроил. 
	// То есть ему просто не нравятся такие названия
	// Ему не хватает допустим quaternary или quinary и тд. цветов внезапно в палитре
	// То он просто добавляет новую строчку в конфигураторе и всё выводится
	export type $ds_surface_color = typeof $ds_surface.COLORS[ number ]
	export type $ds_surface_size = typeof $ds_surface.SIZES[ number ]
	export type $ds_surface_state_modifiers = typeof $ds_surface.STATE_MODIFIERS[ number ]
	export type $ds_surface_variant = typeof $ds_surface.VARIANTS[ number ]

	export class $ds_surface extends $.$ds_surface {

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
			...$ds_surface.COLORS_BRAND,
			...$ds_surface.COLORS_SURFACE_LEVELS
		] as const

		// ===============================

		/**
		 * Foundations: sizes presets
		 */
		static readonly SIZES = [
			'xs',
			'sm',
			'md',
			'lg',
			'xl'
		] as const

		/**
		 * Foundations: appearances palette
		 */
		static readonly VARIANTS = [
			'solid',
			'outline',
			'soft', // antd 'filled' аналог. soft - куда более понятно. Мягкий background, немного прозрачная поверхность
			'ghost' // transparent enabled, но при hover и pressed что-то вроде soft
		] as const

		// ===============================

		// Возможно в выгрузке тогда и мапки с дефолтами надо будет делать
		override attr() {
			const fqnPrefix = 'ds_surface_'

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
		state( next?: $ds_surface_state_modifiers ): $ds_surface_state_modifiers {
			return next ?? 'enabled'
		}

		@$mol_mem
		colors( next?: $ds_surface_color ): $ds_surface_color | undefined {
			return next
		}

		@$mol_mem
		variant( next?: $ds_surface_variant ): $ds_surface_variant {
			return next ?? 'solid'
		}

		@$mol_mem
		interactive( next?: boolean ): boolean | undefined {
			return next
		}

		// Возможно это будет лучше вынести в какой-нибудь компонент Controls,
		// но пока не видно нужды в его выделении. 
		@$mol_mem
		size( next?: $ds_surface_size ): $ds_surface_size | undefined {
			return next
		}
	}
}
