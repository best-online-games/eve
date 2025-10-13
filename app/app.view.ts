namespace $.$$ {
	export class $ds_app extends $.$ds_app {
		@$mol_mem_key
		Menu_link_title(id: string) {
			const titles: Record<string, string> = {
				libraries: 'Libraries',
				components: 'Components',
				design: 'Design',
				icons: 'Icons',
				themer: 'Themer',
			}
			return titles[id] || id
		}
	}
}
