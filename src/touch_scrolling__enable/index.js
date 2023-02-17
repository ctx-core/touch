import { disable__ontouchmove } from '../disable__ontouchmove/index.js'
import { enable__ontouchmove } from '../enable__ontouchmove/index.js'
/**
 * @param params{import('../_types').touch_scrolling__params_T}
 */
export function touch_scrolling__enable(params) {
	let { touch_scrolling } = params
	if (!touch_scrolling) {
		document.removeEventListener('touchmove', disable__ontouchmove)
		document.addEventListener('touchmove', enable__ontouchmove)
	}
}
export {
	touch_scrolling__enable as enable_touch_scrolling,
	touch_scrolling__enable as enable__touch_scrolling,
}
