import React, { useCallback } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'
import {
  sortableContainer,
  sortableElement,
} from 'react-sortable-hoc'

const GenerateItem = index => {
  return (
    <div>
      <UserItem user={getUser(index)} index={index} />
    </div>
  )
}

const ItemContainerSortable = sortableElement(props => (
  <div {...props} />
))

const ItemContainer = props => {
  const { ['data-index']: index } = props
  return <ItemContainerSortable index={index} {...props} />
}

const ListContainerSortable = sortableContainer(
  ({ listRef, children, className, style }) => (
    <div ref={listRef} className={className} style={style}>
      {children}
    </div>
  )
)

export default () => {
  const ListContainer = useCallback(props => (
    <ListContainerSortable
      {...props}
      helperDimensions={({ node }) => {
        return { width: '200px', height: '100px', minHeight: 'auto' }
      }}
      onSortEnd={(...args) => console.log(args)}
    />
  ))

  return (
    <Virtuoso
      totalCount={100000}
      ItemContainer={ItemContainer}
      ListContainer={ListContainer}
      item={GenerateItem}
    />
  )
}
