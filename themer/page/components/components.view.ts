namespace $.$$ {
	export class $ds_themer_page_components extends $.$ds_themer_page_components {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'buttons': 'Buttons',
				'inputs': 'Inputs',
				'cards': 'Cards',
				'tables': 'Tables'
			}
			return titles[id] || id
		}
	}
}
