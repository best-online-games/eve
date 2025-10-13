namespace $.$$ {
	export class $ds_themer_page_icons extends $.$ds_themer_page_icons {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'library': 'Icon Library',
				'usage': 'Usage',
				'custom': 'Custom Icons'
			}
			return titles[id] || id
		}
	}
}
