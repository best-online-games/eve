namespace $.$$ {

	export class $eve_segmented_option extends $.$eve_segmented_option {

		// Override variant based on checked state
		@$mol_mem
		override variant() {
			return this.checked() ? 'text' : 'ghost'
		}

	}

}

