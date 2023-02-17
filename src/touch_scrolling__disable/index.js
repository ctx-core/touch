import { enable__ontouchmove } from '../enable__ontouchmove/index.js'
import { disable__ontouchmove } from '../disable__ontouchmove/index.js'
/**
 * @param params{import('../_types').touch_scrolling__params_T}
 */
export function touch_scrolling__disable(params) {
	let { touch_scrolling } = params
	if (touch_scrolling == null || touch_scrolling) {
		document.removeEventListener('touchmove', enable__ontouchmove)
		document.addEventListener('touchmove', disable__ontouchmove)
	}
}
export {
	touch_scrolling__disable as disable_touch_scrolling,
	touch_scrolling__disable as disable__touch_scrolling,
}
