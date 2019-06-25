**React Virtuoso** is a simple, easy to use React virtualized list component that can render huge data sets. 
Out of the box, Virtuoso:

- Handles items with variable dynamic height; no manual measurements or hard-coding of item heights necessary;
- Supports grouping with sticky group headers;
- Automatically handles content resizing;
- Can render footer at the end of the list;
- Can pin the first `N` items to the top of the list.

React Virtuoso is as small as possible ([Bundlephobia check](https://bundlephobia.com/result?p=react-virtuoso)), 
with a single dependency to the resize observer polyfill.

## Get Started

Install the package in your React project:

```sh
npm install react-virtuoso
```

Or, if yarn is your thing:

```sh
yarn add react-virtuoso
```

Add the component to your application:

```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Virtuoso } from 'react-virtuoso'

const App = () => (
  <Virtuoso 
    style={{ width: '300px', height: '400px' }} 
    totalCount={200} 
    item={index => <div>Item {index}</div>} 
  />
)


ReactDOM.render(<App />, document.getElementById('root'))
```

### Footer

The component accepts an optional 
`footer` [render property](https://reactjs.org/docs/render-props.html), 
which is rendered after all items. 
The footer can be used to host a "load more" button 
or an indicator that the user has reached the end of the list.

Check the [footer](/footer), [press load more](/press-to-load-more) and [endless scrolling](/endless-scrolling) examples for practical applications of the footer.

### Pinned Items

The component accepts an optional `topItems` property, that specifies 
how many of the items to keep "pinned" at the top of the list.  Check the [top items](/top-items) example.

### Grouping

The package exports two components - `Virtuoso` and `GroupedVirtuoso`. 

The grouped component is similar to the flat one, with the following differences:

* Instead of `totalCount`, the component accepts `groupedCounts: number[]`, which specifies the amount of items in each group. 
  For example, passing `[20, 30]` will render two groups with 20 and 30 items each;
* In addition the `item` render prop, the component requires an additional `group` render prop, 
  which renders the **group header**. The `group` callback receives the zero-based group index as a parameter;
* The `item` render prop gets called with an additional second parameter, `groupIndex: number`.

Check the 
[grouped numbers](/grouped-numbers), 
[grouped by first letter](/grouped-by-first-letter) and 
[groups with load on demand](/grouped-with-load-on-demand) 
examples. 

### Scroll to Index

Both `Virtuoso` and `GroupedVirtuoso` provide an imperative `scrollToIndex` method with 
optional `align` that scrolls the specified item into view. `GroupedVirtuoso` exports 
convenience callback to obtain the group item indices in order to scroll to a given group.

Check the 
[scroll to index](/scroll-to-index) and 
[scroll to group](/scroll-to-group) 
examples for possible usage of the method. 

### Customize the Scroll Container

You can swap the virutoso scroller implementation in order to add custom scroll logic or to 
integrade a custom scrolling library (like [React scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)).

Check the [custom scroll container](/custom-scroll-container) example for a starting point.

## Tweaking Performance

Several factors affect the component performance. 
The first and most important one _size of the visible area_. 
Redrawing large items takes more time and reduces the frame rate. 
To see if this affects you, reduce the component width or height; Set the `style` property 
to something like `{{width: '200px'}}`.

Next, if the content in the item prop is complex / large, 
use [React.memo](https://reactjs.org/docs/react-api.html#reactmemo).

You can experiment with the `overscan` property which specifies 
how much more to render in addition to the viewport visible height. 
For example, if the component is `100px` tall, setting the `overscan` 
to `150` will cause the list to render **at least** `250px` of content. 
In a nutshell, increasing the `overscan` causes less frequent re-renders, 
but makes each re-render more expensive (because more items will get replaced).

Loading images and displaying complex components while scrolling can cause jank. 
To fix that, you can hook to the `scrollingStateChange` callback and replace 
the complex content in the item render prop with a simplified one. 
Check the [scroll handling example](/scroll-handling) for a possible implementation.

Finally, as a last resort, you can speed up things by hard-coding the size of the items using the `itemHeight` property. This will cause the component to stop measuring and observing the item sizes. Be careful with that option; ensure that the items won't change size on different resolutions.

## Properties of the `Virtuoso` Component

### `total: number`

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
Check the Tweaking Performance section.

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

### `scrollingStateChange?: (isScrolling: boolean) => void`

Works just like the `scrollingStateChange` callback of the flat component.


## Methods (available in both `Virtuoso` and `GroupedVirtuoso`)

### `scrollToIndex(location: number | { index: number, align: 'start'|'center'|'end' }): void`

Scrolls the specified item into view. Passing the longer form allows the item to be aligned to the top, center or end of the list.

**Notice:** having variable height items in the view being scrolled to can displace the item. 
If this is your case, you can use `align: 'center'` to make sure that the entire item is visible.

## Gotchas

CSS margins in the content are the Kryptonite of Virtuoso's content measuring mechanism - the [`contentRect` measurement](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) does not include them.

If this affects you, the total scroll height will be miscalculated, and the user won't be able to scroll all the way down to the list.

To avoid that, if you are putting paragraphs and headings inside the `item`, make sure that the top / bottom elements' margins do not protrude outside of the item container.

```jsx
<Virtuoso
  totalCount={100}
  item={index => (
    <div>
      <p style={{ margin: 0 }}>Item {index}</p>
    </div>
  )}
/>
```

## Browser Support

When in grouped mode, Virtuoso uses `position: sticky` to keep the virtual viewport at top of the scroller. [This does not work in IE 11](https://caniuse.com/#feat=css-sticky).
