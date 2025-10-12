namespace $.$$ {
	export class $ds_themer extends $.$ds_themer {
		// Page routing
		@$mol_mem
		page() {
			return this.$.$mol_state_arg.value('page') || 'themer'
		}

		@$mol_mem
		page_body() {
			const page = this.page()

			switch (page) {
				case 'themer':
					return [this.Page_themer()]
				case 'libraries':
				case 'components':
				case 'design':
				case 'icons':
				case 'media':
					const placeholder = this.Page_placeholder(page)
					placeholder.page_title = () => page.charAt(0).toUpperCase() + page.slice(1)
					return [placeholder]
				default:
					return [this.Page_themer()]
			}
		}

		@$mol_mem_key
		Page_themer() {
			const page = new this.$.$ds_themer_page_themer()

			// Bind color properties
			page.color_back = (next?: string) => this.color_back(next)
			page.color_card = (next?: string) => this.color_card(next)
			page.color_field = (next?: string) => this.color_field(next)
			page.color_hover = (next?: string) => this.color_hover(next)
			page.color_text = (next?: string) => this.color_text(next)
			page.color_shade = (next?: string) => this.color_shade(next)
			page.color_line = (next?: string) => this.color_line(next)
			page.color_focus = (next?: string) => this.color_focus(next)
			page.color_control = (next?: string) => this.color_control(next)
			page.color_current = (next?: string) => this.color_current(next)
			page.color_special = (next?: string) => this.color_special(next)

			return page
		}

		@$mol_mem_key
		Page_placeholder(id: string) {
			return new this.$.$ds_themer_page_placeholder()
		}

		// Storage helper
		stored(key: string, next?: string): string {
			const storage_key = `ds_themer_${key}`

			if (next !== undefined) {
				localStorage.setItem(storage_key, next)
				return next
			}

			return localStorage.getItem(storage_key) || ''
		}

		// Color getters/setters with localStorage
		@$mol_mem
		color_back(next?: string): string {
			if (next !== undefined) return this.stored('color_back', next)
			return this.stored('color_back')
		}

		@$mol_mem
		color_card(next?: string): string {
			if (next !== undefined) return this.stored('color_card', next)
			return this.stored('color_card')
		}

		@$mol_mem
		color_field(next?: string): string {
			if (next !== undefined) return this.stored('color_field', next)
			return this.stored('color_field')
		}

		@$mol_mem
		color_hover(next?: string): string {
			if (next !== undefined) return this.stored('color_hover', next)
			return this.stored('color_hover')
		}

		@$mol_mem
		color_text(next?: string): string {
			if (next !== undefined) return this.stored('color_text', next)
			return this.stored('color_text')
		}

		@$mol_mem
		color_shade(next?: string): string {
			if (next !== undefined) return this.stored('color_shade', next)
			return this.stored('color_shade')
		}

		@$mol_mem
		color_line(next?: string): string {
			if (next !== undefined) return this.stored('color_line', next)
			return this.stored('color_line')
		}

		@$mol_mem
		color_focus(next?: string): string {
			if (next !== undefined) return this.stored('color_focus', next)
			return this.stored('color_focus')
		}

		@$mol_mem
		color_control(next?: string): string {
			if (next !== undefined) return this.stored('color_control', next)
			return this.stored('color_control')
		}

		@$mol_mem
		color_current(next?: string): string {
			if (next !== undefined) return this.stored('color_current', next)
			return this.stored('color_current')
		}

		@$mol_mem
		color_special(next?: string): string {
			if (next !== undefined) return this.stored('color_special', next)
			return this.stored('color_special')
		}

		// Export theme to CSS
		@$mol_action
		export() {
			const css = this.generate_css()
			const blob = new Blob([css], { type: 'text/css' })
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = 'theme.css'
			a.click()
			URL.revokeObjectURL(url)
		}

		// Copy theme to clipboard
		@$mol_action
		copy() {
			const css = this.generate_css()
			navigator.clipboard.writeText(css)
		}

		// Reset to defaults
		@$mol_action
		reset() {
			const keys = [
				'color_back',
				'color_card',
				'color_field',
				'color_hover',
				'color_text',
				'color_shade',
				'color_line',
				'color_focus',
				'color_control',
				'color_current',
				'color_special',
			]

			keys.forEach(key => {
				localStorage.removeItem(`ds_themer_${key}`)
			})

			// Reset to view.tree defaults
			this.color_back('oklch(20% .01 240deg)')
			this.color_card('oklch(30% .05 240deg / .25)')
			this.color_field('oklch(15% 0 240deg / .25)')
			this.color_hover('oklch(70% 0 240deg / .1)')
			this.color_text('oklch(80% 0 240deg)')
			this.color_shade('oklch(60% 0 240deg)')
			this.color_line('oklch(60% 0 240deg / .25)')
			this.color_focus('oklch(80% .2 60deg)')
			this.color_control('oklch(70% .1 240deg)')
			this.color_current('oklch(70% .2 150deg)')
			this.color_special('oklch(70% .2 330deg)')
		}

		// Generate CSS file content
		generate_css() {
			return `:root, [mol_theme="$mol_theme_dark"] {
	--mol_theme_back: ${this.color_back() || 'oklch(20% .01 240deg)'};
	--mol_theme_card: ${this.color_card() || 'oklch(30% .05 240deg / .25)'};
	--mol_theme_field: ${this.color_field() || 'oklch(15% 0 240deg / .25)'};
	--mol_theme_hover: ${this.color_hover() || 'oklch(70% 0 240deg / .1)'};
	--mol_theme_text: ${this.color_text() || 'oklch(80% 0 240deg)'};
	--mol_theme_shade: ${this.color_shade() || 'oklch(60% 0 240deg)'};
	--mol_theme_line: ${this.color_line() || 'oklch(60% 0 240deg / .25)'};
	--mol_theme_focus: ${this.color_focus() || 'oklch(80% .2 60deg)'};
	--mol_theme_control: ${this.color_control() || 'oklch(70% .1 240deg)'};
	--mol_theme_current: ${this.color_current() || 'oklch(70% .2 150deg)'};
	--mol_theme_special: ${this.color_special() || 'oklch(70% .2 330deg)'};
}

[mol_theme="$mol_theme_light"] {
	/* Add light theme variations here if needed */
}
`
		}
	}
}
