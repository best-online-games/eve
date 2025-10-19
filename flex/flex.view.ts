namespace $.$$ {


	export type $eve_flex_direction = typeof $eve_flex.DIRECTIONS[ number ]
	export type $eve_flex_wrap = 'wrap' | 'nowrap' | 'wrap-reverse'
	export type $eve_flex_justify_content = typeof $eve_flex.JUSTIFY_CONTENTS[ number ]
	export type $eve_flex_align_items = typeof $eve_flex.ALIGN_ITEMS[ number ]

	/**
	 * Well-known basic flex component.
	 */
	export class $eve_flex extends $.$eve_flex {

		static readonly DIRECTIONS = [
			'row',
			'row-reverse',
			'column',
			'column-reverse',
		] as const;

		static readonly JUSTIFY_CONTENTS = [
			'flex-start',
			'flex-end',
			'center',
			'space-between',
			'space-around',
			'space-evenly',
		] as const;

		static readonly ALIGN_ITEMS = [
			'flex-start',
			'flex-end',
			'center',
			'space-between',
			'space-around',
			'space-evenly',
			'stretch',
		] as const;

		static readonly WRAPS = [
			'wrap',
			'nowrap',
			'wrap-reverse',
		] as const;

		override attr() {
			const fqnPrefix = 'eve_flex_'
			const superAttrs = super.attr()

			return {
				...superAttrs,
				[ `${ fqnPrefix }direction` ]: this.direction(),
				[ `${ fqnPrefix }justify_content` ]: this.justify_content(),
				[ `${ fqnPrefix }align_items` ]: this.align_items(),
				[ `${ fqnPrefix }wrap` ]: this.wrap(),
			}
		}

		override style() {
			const superStyles = super.style()
			return {
				...superStyles,
				gap: this.gap(),
			}
		}

		@$mol_mem
		direction( next?: $eve_flex_direction ): $eve_flex_direction {
			return next ?? 'row'
		}

		@$mol_mem
		justify_content( next?: $eve_flex_justify_content ): $eve_flex_justify_content {
			return next ?? 'flex-start'
		}

		@$mol_mem
		align_items( next?: $eve_flex_align_items ): $eve_flex_align_items {
			return next ?? 'stretch'
		}

		@$mol_mem
		wrap( next?: $eve_flex_wrap ): $eve_flex_wrap {
			return next ?? 'nowrap'
		}

		@$mol_mem
		gap( next?: string ): string {
			return next ?? '0'
		}

	}
}
