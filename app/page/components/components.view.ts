namespace $.$$ {
	
	export class $ds_themer_page_components extends $.$ds_themer_page_components {
		@$mol_mem_key
		spread_title(id: string) {
			const titles: Record<string, string> = {
				'buttons': 'Buttons',
				'inputs': 'Inputs',
				'cards': 'Cards',
				'tables': 'Tables',
				'surfaces': 'Surfaces'
			}
			return titles[id] || id
		}

		// 5 строк - по одной на каждый размер
		@$mol_mem
		size_rows() {
			return $ds_surface.SIZES.map(size => (this as any).Size_row(size))
		}

		// Колонки в строке - все цвета для данного размера
		@$mol_mem_key
		size_surfaces(size: string) {
			return $ds_surface.COLORS.map(color => 
				(this as any).Surface_cell(`${color}__${size}`)
			)
		}

		@$mol_mem_key
		surface_color(id: string) {
			
			return id.split('__')[0]
		}
		
		@$mol_mem_key
		surface_interactive(id: string) {
			return id.split('__')[1]
		}

		// Текст лейбла
		@$mol_mem_key
		surface_label_text(id: string) {
			const [color, size] = id.split('__')
			return `${color}\n${size}`
		}
	}
}
