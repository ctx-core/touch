import { ontouchmove_enable } from './ontouchmove_enable'
import { ontouchmove_disable } from './ontouchmove_disable'
export function disable_touch_scrolling(ctx) {
	let { scrolling__touch } = ctx
	if (
		scrolling__touch == null
		|| scrolling__touch
	) {
		document.removeEventListener('touchmove',
			ontouchmove_enable)
		document.addEventListener('touchmove',
			ontouchmove_disable)
	}
}
export { disable_touch_scrolling as disable__scrolling__touch }