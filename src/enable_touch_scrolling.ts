import { ontouchmove_disable } from './ontouchmove_disable'
import { ontouchmove_enable } from './ontouchmove_enable'
export function enable_touch_scrolling(ctx) {
	let { scrolling__touch } = ctx
	if (!scrolling__touch) {
		document.removeEventListener('touchmove',
			ontouchmove_disable)
		document.addEventListener('touchmove',
			ontouchmove_enable)
	}
}
export { enable_touch_scrolling as enable__scrolling__touch }