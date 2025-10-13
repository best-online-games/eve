namespace $.$$ {


	export type $ds_flex_direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
	export type $ds_flex_wrap = 'wrap' | 'nowrap' | 'wrap-reverse';
	export type $ds_flex_justify_content = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	export type $ds_flex_align_items = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

	export class $ds_flex extends $.$ds_surface {


		override attr() {
			const fqnPrefix = 'ds_flex_';
			return {
				...super.attr(),
				[`${fqnPrefix}direction`]: this.direction(),
				[`${fqnPrefix}justify-content`]: this.justify_content(),
				[`${fqnPrefix}align-items`]: this.align_items(),
				[`${fqnPrefix}wrap`]: this.wrap(),
			}
		}

		direction(next?: $ds_flex_direction): $ds_flex_direction {
			return next ?? 'row';
		}

		justify_content(next?: $ds_flex_justify_content): $ds_flex_justify_content {
			return next ?? 'flex-start';
		}

		align_items(next?: $ds_flex_align_items): $ds_flex_align_items {
			return next ?? 'stretch';
		}

		wrap(next?: $ds_flex_wrap): $ds_flex_wrap {
			return next ?? 'nowrap';
		}
		


	}
}
