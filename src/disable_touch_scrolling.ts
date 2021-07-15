import { ontouchmove_enable } from './ontouchmove_enable.js'
import { ontouchmove_disable } from './ontouchmove_disable.js'
export function disable_touch_scrolling(ctx:{ touch_scrolling:boolean }) {
	let { touch_scrolling } = ctx
	if (
		touch_scrolling == null
		|| touch_scrolling
	) {
		document.removeEventListener('touchmove',
			ontouchmove_enable)
		document.addEventListener('touchmove',
			ontouchmove_disable)
	}
}
export { disable_touch_scrolling as disable__touch_scrolling }
