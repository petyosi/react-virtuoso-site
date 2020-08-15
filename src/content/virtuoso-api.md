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

### `initialTopMostItemIndex?: number`

Setting this property causes the component to "start" the list from the specified index when mounted.
Use this only to specify the initial state on mount. Use the `scrollToIndex` method if the component is already mounted.

### `itemHeight?: number`

Can be used to improve performance if the rendered items are of known size. Setting it causes the component to skip item measurements. See the Tweaking Performance section for more details.

### `defaultItemHeight?: number`

By default, the component assumes the default item height from the first rendered item (rendering it as a "probe").
If the first item turns out to be an outlier (very short or tall), the rest of the rendering will be slower, as multiple passes of rendering should happen for the list to fill the viewport.
Setting this property causes the component to skip the "probe" rendering and use the property value instead.

### `ScrollContainer?: React.FC`

Optional. Can be used to replace and extend the scrollable element of the component.
Check the [custom scroll container](/custom-scroll-container) for sample usage.

### `emptyComponent?: React.ComponentType`

Optional. Displayed when the list has no items.

### `computeItemKey?: (index: number) => number`

Optional - if specified, the component will use the provided function to generate the `key={}` property for each list item.

### `maxRangeSize?: number`

Optional - use **only** if you have very large lists with uneven item sizes and you observe performance issues with rendering. Controls the maximum size of the size caching data structure.  
Once the cache size is exceeded, the structure is "reset" to the default size, discarding the sizes of the items outside of the viewport. 
A recommended size would be somewhere in the low thousands. 

### `followOutput?: boolean`

If set to `true`, the list will automatically scroll to bottom if the total count is changed. See the [Stick to Bottom](/stick-to-bottom) scenario for a working example.

### `scrollSeek?: ScrollSeekConfiguration`

The `scrollSeek` property can be used to display placeholders if the user scrolls fast through the list. The type looks like this:

```ts
interface ScrollSeekConfiguration {
  // Controls when the component enters scroll seeking state. 
  // Moderately fast scrolling generates velocity around 100.
 enter: (velocity: number, index: number) => boolean
  // Controls when the component exits scroll seeking state
 exit: (velocity: number, index: number) => boolean 
 // Use to update an indicator of the list location during scroll seek
 change: (velocity: number, index: number) => void
 // Configures the seek placeholder
 placeholder: React.ComponentType<{height: number, index: number}
}
```

## Callback Properties

### `scrollingStateChange?: (isScrolling: boolean) => void`

Gets called when the user starts / stops scrolling. Can be used to hide complex item contents during scrolling.

### `startReached?: () => void`

Gets called when the user scrolls to the start of the list.

### `endReached?: (index: number) => void`

Gets called when the user scrolls to the end of the list.
Receives the last item index as an argument. Can be used to implement [endless scrolling](/endless-scrolling).

### `totalListHeightChanged?: (height: number) => void`

Optional. Gets called each time the total height of the list gets re-computed. Notice that the value is just an estimate based on what's rendered so far.

### `itemsRendered?: (items: Array<{ transposedIndex: number }>) => void`

Optional. The callback is called with the new set of items each time the list items are rendered due to scrolling.

### `rangeChanged?: (range: { startIndex: number, endIndex: number }) => void`

Optional. Gets called with the top / bottom index of the currently rendered list range.

### `atBottomStateChange?: (atBottom: boolean) => void`

Optional. Gets called with `true` / `false` when the list has reached the bottom / gets scrolled up.  See the [Stick to Bottom](/stick-to-bottom) scenario for a possible application.

## Methods

### `scrollToIndex(location: number | { index: number, align: 'start'|'center'|'end' }): void`

Scrolls the specified item into view. Passing the longer form allows the item to be aligned to the top, center or end of the list.

### `adjustForPrependedItems(count: number): void`

Call when you are increasing the `totalCount` with the intend to prepend items to the top of the list. 
Check the [Prepend Items Scenario](/prepend-items) for a working example.

Scrolls the specified item into view. Passing the longer form allows the item to be aligned to the top, center or end of the list.
