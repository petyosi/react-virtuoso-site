import React, { useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => {
  const [visibleRange, setVisibleRange] = useState([0, 0])
  return (
    <div style={{ display: 'flex' }}>
      <Virtuoso
        totalCount={10000}
        item={GenerateItem}
        rangeChanged={({ startIndex, endIndex }) => {
          setVisibleRange([startIndex, endIndex])
        }}
        style={{ height: '400px', width: '350px' }}
      />
      <div>
        Current visible range:{' '}
        <div>
          <strong>
            {visibleRange[0]} - {visibleRange[1]}
          </strong>
        </div>{' '}
      </div>
    </div>
  )
}
