namespace $.$$ {
	export class $ds_themer_page_media extends $.$ds_themer_page_media {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'images': 'Images',
				'videos': 'Videos',
				'assets': 'Assets'
			}
			return titles[id] || id
		}
	}
}
