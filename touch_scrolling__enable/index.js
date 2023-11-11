import { ontouchmove__disable } from '../ontouchmove__disable/index.js'
import { ontouchmove__enable } from '../ontouchmove__enable/index.js'
/**
 * @param params{import('../_types').touch_scrolling__params_T}
 */
export function touch_scrolling__enable(params) {
	let { touch_scrolling } = params
	if (!touch_scrolling) {
		document.removeEventListener('touchmove', ontouchmove__disable)
		document.addEventListener('touchmove', ontouchmove__enable)
	}
}
export {
	touch_scrolling__enable as enable_touch_scrolling,
	touch_scrolling__enable as enable__touch_scrolling,
}
