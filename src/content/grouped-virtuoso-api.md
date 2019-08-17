## Properties of the `GroupedVirtuoso` Component

### `groupCounts: number[]`

Mandatory. Specifies the amount of items in each group (and, actually, how many groups are there). For example, passing `[20, 30]` will display 2 groups with 20 and 30 items each.

### `item: (index: number, groupIndex: number) => ReactElement`

Mandatory. Specifies how each item gets rendered. The callback receives the zero-based index of the item and the index of the group of the item.

### `group: (groupIndex: number) => ReactElement`

Mandatory. Specifies how each each group header gets rendered. The callback receives the zero-based index of the group.

### `style?: CSSProperties`

Works just like the `style` property of the flat component.

### `className?: string`

Works just like the `className` property of the flat component.

### `footer?: () => ReactElement`

Works just like the `footer` property of the flat component.

### `overscan?: number`

Works just like the `overscan` property of the flat component.

### `endReached?: (index: number) => void`

Works just like the `endReached` callback of the flat component.

### `itemsRendered?: (items: Array<{ transposedIndex: number, type: 'item', groupIndex: number } | { type: 'group', groupIndex: number }>) => void`

Optional. The callback is called with the new set of items each time the list items are redendered due to scrolling. 

The list contains both `type: "item"` and `type:"group"` records for regular and group items.

### `scrollingStateChange?: (isScrolling: boolean) => void`

Works just like the `scrollingStateChange` callback of the flat component.

## Methods (available in both `Virtuoso` and `GroupedVirtuoso`)

### `scrollToIndex(location: number | { index: number, align: 'start'|'center'|'end' }): void`

Scrolls the specified item into view. Passing the longer form allows the item to be aligned to the top, center or end of the list.

**Notice:** having variable height items in the view being scrolled to can displace the item.
If this is your case, you can use `align: 'center'` to make sure that the entire item is visible.
