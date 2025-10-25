namespace $.$$ {
	
	/**
	 * Radio button component based on mol_switch
	 * Inherits from eve_flex for layout and eve_surface for styling
	 */
	export class $eve_radio extends $.$eve_radio {
		
		@$mol_mem_key
		circle_inner( id: any ): readonly any[] {
			return this.option_checked( id ) ? super.circle_inner( id ) : []
		}
		
	}
}

