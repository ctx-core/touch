import { ontouchmove_disable } from './ontouchmove_disable';
import { ontouchmove_enable } from './ontouchmove_enable';
export function enable_touch_scrolling(ctx) {
    let { touch_scrolling } = ctx;
    if (!touch_scrolling) {
        document.removeEventListener('touchmove', ontouchmove_disable);
        document.addEventListener('touchmove', ontouchmove_enable);
    }
}
export { enable_touch_scrolling as enable__touch_scrolling };
//# sourceMappingURL=src/enable_touch_scrolling.js.map