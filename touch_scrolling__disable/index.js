import { ontouchmove__disable } from '../ontouchmove__disable'
import { ontouchmove__enable } from '../ontouchmove__enable'
/**
 * @param params{import('../_types').touch_scrolling__params_T}
 */
export function touch_scrolling__disable(params) {
	let { touch_scrolling } = params
	if (touch_scrolling == null || touch_scrolling) {
		document.removeEventListener('touchmove', ontouchmove__enable)
		document.addEventListener('touchmove', ontouchmove__disable)
	}
}
export {
	touch_scrolling__disable as disable_touch_scrolling,
	touch_scrolling__disable as disable__touch_scrolling,
}
