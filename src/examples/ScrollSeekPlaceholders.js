import React, { useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

const randomHeights = Array(10)
  .fill(true)
  .map(() => Math.round(Math.random() * 60) + 10)

export default () => {
  // use the visible range to provide information
  // about the list current position.
  const [visibleRange, setVisibleRange] = useState(['-', '-'])
  return (
    <div style={{ display: 'flex' }}>
      <Virtuoso
        totalCount={10000}
        item={GenerateItem}
        scrollSeek={{
          enter: velocity => Math.abs(velocity) > 200,
          exit: velocity => {
            const shouldExit = Math.abs(velocity) < 30
            if (shouldExit) {
              setVisibleRange(['-', '-'])
            }
            return shouldExit
          },
          change: (_velocity, { startIndex, endIndex }) =>
            setVisibleRange([startIndex, endIndex]),
          // You can use index to randomize
          // and make the placeholder list more organic.
          placeholder: ({ height, index }) => (
            <div
              style={{
                height,
                backgroundColor: index % 2 ? '#fff' : '#f4f4f4',
                padding: '8px',
                boxSizing: 'border-box',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  background: '#ccc',
                  height: randomHeights[index % 10],
                }}
              ></div>
            </div>
          ),
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
