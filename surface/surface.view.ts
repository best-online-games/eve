namespace $.$$ {
// В абсолюте эти типы должны быть выведены из палитры которую опльзак настроил. 
// То есть ему просто не нравятся такие названия
// Ему не хватает допустим quaternary или quinary и тд. цветов внезапно в палитре
// То он просто добавляет новую строчку в конфигураторе и всё выводится
	export type $ds_surface_colors = typeof $ds_surface.COLORS[number];
	export type $ds_surface_sizes = typeof $ds_surface.SIZES[number];
	export type $ds_surface_state_modifiers = typeof $ds_surface.STATE_MODIFIERS[number];

	export class $ds_surface extends $.$ds_surface {

		/**
		 * Foundations: basic state modifiers
		 */
		static readonly STATE_MODIFIERS = [
			'enabled',
			'hover',
			'pressed',
			'disabled',
			'loading'
		] as const

		/**
		 * Foundations: colors palette
		 */
		static readonly COLORS = [
			'primary', 
			'secondary', 
			'tertiary', 
			'danger', 
			'warning', 
			'success', 
			'info', 
			// Surface levels
			'lowest', 
			'low', 
			'medium', 
			'high', 
			'highest'
		] as const

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

		// ===============================



		// Возможно в выгрузке тогда и мапки с дефолтами надо будет делать
	override attr() {
		const attrs: Record<string, any> = {
			...super.attr(),
			'ds_surface_color': this.colors(),
			'ds_surface_interactive': this.interactive(),
			'ds_surface_size': this.size(),
		}
		
		// Опционально: добавляем state если он установлен
		const state = (this as any)._state
		if (state) attrs['ds_surface_state'] = state
		
		return attrs
	}

	state(value?: $ds_surface_state_modifiers) {
		if (value !== undefined) (this as any)._state = value
		return (this as any)._state ?? 'enabled'
	}

		@$mol_mem
		colors(next?: $ds_surface_colors): $ds_surface_colors {
			return next ?? 'primary'
		}

		@$mol_mem
		interactive(next?: boolean): boolean {
			return next ?? false
		}

		// Возможно это будет лучше вынести в какой-нибудь компонент Controls,
		// но пока не видно нужды в его выделении. 
		@$mol_mem
		size(next?: $ds_surface_sizes): $ds_surface_sizes {
			return next ?? 'md'
		}
		
	}
}
