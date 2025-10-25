namespace $.$$ {

	/**
	 * Checkbox UI component based on mol_check
	 * Inherits from eve_flex for layout and eve_surface for styling
	 */
	export class $eve_check extends $.$eve_check {

		override click( next?: Event ) {
			if( next?.defaultPrevented ) return
			this.checked( !this.checked() )
			if( next ) next.preventDefault()
		}

		override sub() {
			return [
				this.Box(),
				... this.label(),
			] as readonly $mol_view_content[]
		}

		override label() {
			return this.title() ? super.label() : []
		}
		
		override aria_checked() {
			return String( this.checked() )
		}

	}
}

