namespace $.$$ {
	export class $ds_themer_page_design extends $.$ds_themer_page_design {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'principles': 'Principles',
				'patterns': 'Patterns',
				'guidelines': 'Guidelines'
			}
			return titles[id] || id
		}
	}
}
