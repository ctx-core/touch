import { ontouchmove_enable } from './ontouchmove_enable';
import { ontouchmove_disable } from './ontouchmove_disable';
export function disable_touch_scrolling(ctx) {
    let { touch_scrolling } = ctx;
    if (touch_scrolling == null
        || touch_scrolling) {
        document.removeEventListener('touchmove', ontouchmove_enable);
        document.addEventListener('touchmove', ontouchmove_disable);
    }
}
export { disable_touch_scrolling as disable__touch_scrolling };
