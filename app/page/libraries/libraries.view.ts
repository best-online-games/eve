namespace $.$$ {
	export class $ds_themer_page_libraries extends $.$ds_themer_page_libraries {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'overview': 'Overview',
				'installation': 'Installation',
				'usage': 'Usage'
			}
			return titles[id] || id
		}
	}
}
