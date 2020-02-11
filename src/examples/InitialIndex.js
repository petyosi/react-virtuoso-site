import React from 'react'
import { Virtuoso } from 'react-virtuoso'
import { UserItem } from './ExampleComponents'
import { getUser } from './FakeData'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => {
  // set the initialTopMostItemIndex to 999 to have the list start at the bottom
  return (
    <div>
      <Virtuoso
        totalCount={1000}
        overscan={200}
        initialTopMostItemIndex={799}
        item={GenerateItem}
        style={{ height: '400px', width: '350px' }}
      />
    </div>
  )
}
