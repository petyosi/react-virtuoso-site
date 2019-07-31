## Properties of the `Virtuoso` Component

### `totalCount: number`

Mandatory. Specifies the total amount of items to be displayed by the list.

### `item: (index: number) => ReactElement`

Mandatory. Specifies how each item gets rendered. The callback receives the zero-based index of the item.

### `style?: CSSProperties`

Optional; most often, you will need to tweak the size of the component by setting `width` and `height`.
The style is passed to the outermost `div` element of the component.

### `className?: string`

Optional; sets the CSS class of the outermost element of the component.

### `footer?: () => ReactElement`

Optional. Defines content to be rendered at the bottom of the list.

### `overscan?: number`

Optional. Causes the component to render extra content in addition to the necessary one to fill in the visible viewport.

### `initialItemCount?: number`

Optional, use if you are using server-side rendering (SSR) and would like to have some amount of items initially rendered regardless of the item/container size.

### `endReached?: (index: number) => void`

Gets called when the user scrolls to the end of the list.
Receives the last item index as an argument. Can be used to implement [endless scrolling](/endless-scrolling).

### `scrollingStateChange?: (isScrolling: boolean) => void`

Gets called when the user starts / stops scrolling. Can be used to hide complex item contents during scrolling.

### `itemHeight?: number`

Can be used to improve performance if the rendered items are of known size. Setting it causes the component to skip item measurements. See the Tweaking Performance section for more details.

### `ScrollContainer: React.FC`

Optional. Can be used to replace and extend the scrollable element of the component.
Check the [custom scroll container](/custom-scroll-container) for sample usage.

## Methods

### `scrollToIndex(location: number | { index: number, align: 'start'|'center'|'end' }): void`

Scrolls the specified item into view. Passing the longer form allows the item to be aligned to the top, center or end of the list.

**Notice:** having variable height items in the view being scrolled to can displace the item.
If this is your case, you can use `align: 'center'` to make sure that the entire item is visible.
