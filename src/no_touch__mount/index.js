import { add_class } from '@ctx-core/dom'
export function no_touch__mount() {
	// modernizer-like touch workaround
	if (!('ontouchstart' in document.documentElement)) {
		add_class(document.documentElement, 'no-touch')
	}
}
export {
	no_touch__mount as mount_no_touch,
}
