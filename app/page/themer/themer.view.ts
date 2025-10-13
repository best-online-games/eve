namespace $.$$ {
	export class $ds_app_page_themer extends $.$ds_app_page_themer {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				colors: 'Colors',
				typography: 'Typography',
				spacing: 'Spacing',
			}
			return titles[id] || id
		}

		@$mol_mem_key
		Spread(id: string) {
			const page = new this.$.$mol_page()
			page.title = () => this.spread_title(id)
			page.body = () => [this.Spread_content(id)]
			return page
		}

		@$mol_mem_key
		Spread_content(id: string) {
			switch (id) {
				case 'colors':
					return this.Colors_page()
				case 'typography':
					const typoText = new this.$.$mol_text()
					typoText.text = () => 'Typography settings coming soon...'
					return typoText
				case 'spacing':
					const spacingText = new this.$.$mol_text()
					spacingText.text = () => 'Spacing settings coming soon...'
					return spacingText
				default:
					const defaultText = new this.$.$mol_text()
					defaultText.text = () => 'Coming soon...'
					return defaultText
			}
		}

		@$mol_mem
		Colors_page() {
			const page = new this.$.$ds_themer_page_themer_colors()

			// Bind color properties from parent
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
	}
}
