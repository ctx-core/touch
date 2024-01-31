export function no_touch__mount() {
	// modernizer-like touch workaround
	if (!('ontouchstart' in document.documentElement)) {
		document.documentElement.classList.add('no-touch')
	}
}
export {
	no_touch__mount as mount_no_touch,
}
