import { add__class } from '@ctx-core/dom'
export function mount__no_touch() {
	// modernizer-like touch workaround
	if (!('ontouchstart' in document.documentElement)) {
		add__class(document.documentElement, 'no-touch')
	}
}
export function enable__scrolling__touch(ctx) {
	let { scrolling__touch } = ctx
	if (!scrolling__touch) {
		document.removeEventListener('touchmove',
			ontouchmove__disable)
		document.addEventListener('touchmove',
			ontouchmove__enable)
	}
}
export function disable__scrolling__touch(ctx) {
	let { scrolling__touch } = ctx
	if (
		scrolling__touch == null
		|| scrolling__touch
	) {
		document.removeEventListener('touchmove',
			ontouchmove__enable)
		document.addEventListener('touchmove',
			ontouchmove__disable)
	}
}
function ontouchmove__enable() {
	return true
}
function ontouchmove__disable(e) {
	e.preventDefault()
}
