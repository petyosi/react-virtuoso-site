## Properties of the `VirtuosoGrid` Component

### `totalCount: number`

Mandatory. Specifies the total amount of items to be displayed by the grid.

### `item: (index: number) => ReactElement`

Mandatory. Specifies how each item gets rendered. The callback receives the zero-based index of the item.

### `listClassName?: string`

Defaults to `virtuoso-grid-list`. Use this to specify the `className` of the item container element. See [the grid demo](/grid-responsive-columns) for a working example.

### `itemClassName?: string`

Defaults to `virtuoso-grid-item`. Use this to specify the `className` of the item elements. See [the grid demo](/grid-responsive-columns) for a working example.

### `overscan?: number`

Optional. Causes the component to render extra content in addition to the necessary one to fill in the visible viewport.

### `style?: CSSProperties`

Optional; most often, you will need to tweak the size of the component by setting `width` and `height`.
The style is passed to the outermost `div` element of the component.

### `className?: string`

Optional; sets the CSS class of the outermost element of the component.

### `ScrollContainer?: TScrollContainer`

Optional. Can be used to replace and extend the scrollable element of the component.
Check the [custom scroll container](/custom-scroll-container) for sample usage.

### `scrollingStateChange?: (isScrolling: boolean) => void`

Gets called when the user starts / stops scrolling. Can be used to hide complex item contents during scrolling.

### `endReached?: (index: number) => void`

Gets called when the user scrolls to the end of the grid.
Receives the last item index as an argument. Can be used to implement [endless scrolling](/endless-scrolling).

## Methods

### `scrollToIndex(location: number | { index: number, align: 'start'|'center'|'end' }): void`

Scrolls the specified item into view. Passing an object allows the item to be aligned to the top, center or end of the grid.
