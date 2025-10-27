namespace $.$$ {
	export class $eve_app_page_sb_page extends $.$eve_app_page_sb_page {
		
		title_lower(): string {
			return this.title() ? this.title().replaceAll( ' ', '/' ).toLowerCase() : ''
		}
		
	}
}
