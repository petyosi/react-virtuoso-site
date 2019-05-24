import React, { useRef } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

// className is string | undefined, passed from
// the root component
//
// style is CSSProperties, setting the size and the
// overflow of the element. You may have to discard
// some of those if setting up a custom scroller.
//
// scrollTo is an event emitter, which executes
// the callback when the scrollToIndex method is called
//
// reportScrollTop should be wired up to the onScroll event,
// passing the current scrollTop position
const MyScrollContainer = ({
  className,
  style,
  reportScrollTop,
  scrollTo,
  children,
}) => {
  const elRef = useRef(null)

  scrollTo(scrollTop => {
    elRef.scrollTo({ top: scrollTop })
  })

  return (
    <div
      ref={elRef}
      onScroll={e => reportScrollTop(e.target.scrollTop)}
      style={{
        ...style,
        border: '5px dashed gray',
        borderRadius: '4px',
      }}
      tabIndex={0}
      className={className}
    >
      {children}
    </div>
  )
}

export default () => (
  <Virtuoso
    ScrollContainer={MyScrollContainer}
    totalCount={1000}
    overscan={200}
    item={GenerateItem}
    style={{ height: '400px', width: '350px' }}
  />
)
