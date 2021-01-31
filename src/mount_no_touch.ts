import { add__class } from '@ctx-core/dom'
export function mount_no_touch() {
	// modernizer-like touch workaround
	if (!('ontouchstart' in document.documentElement)) {
		add__class(document.documentElement, 'no-touch')
	}
}
