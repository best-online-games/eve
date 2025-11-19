namespace $.$$ {

	export class $eve_radio extends $.$eve_radio {

		@$mol_mem
		dom_id() {
			return `${ this }:radio`
		}

		@$mol_mem
		checked( next?: boolean ): boolean {
			return next ?? false
		}

		@$mol_mem
		input_checked() {
			return this.checked()
		}

		@$mol_mem
		disabled( next?: boolean ): boolean {
			return next ?? false
		}

		override variant(): $eve_surface_variant {
			return this.checked() ? 'solid' : 'outline'
		}

		event_click( next?: Event ) {
			if( this.disabled() ) {
				next?.preventDefault()
				return
			}
			if( next?.defaultPrevented ) return
			this.checked( true )
			if( next ) next.preventDefault()
		}

		aria_checked() {
			return String( this.checked() )
		}

	}
}

