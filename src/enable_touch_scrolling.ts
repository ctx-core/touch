import { ontouchmove_disable } from './ontouchmove_disable.js'
import { ontouchmove_enable } from './ontouchmove_enable.js'
export function enable_touch_scrolling(ctx:{ touch_scrolling:boolean }) {
	let { touch_scrolling } = ctx
	if (!touch_scrolling) {
		document.removeEventListener('touchmove',
			ontouchmove_disable)
		document.addEventListener('touchmove',
			ontouchmove_enable)
	}
}
export { enable_touch_scrolling as enable__touch_scrolling }
