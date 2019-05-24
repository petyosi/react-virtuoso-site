import React, { useState, useRef } from 'react'
import { GroupedVirtuoso } from 'react-virtuoso'
import { generateGroupedUsers } from './FakeData'
import { ExampleGroup, UserItem } from './ExampleComponents'

export default () => {
  // the generateGroupedUsers is a dummy implementation
  // that builds grouped data
  // the users variable contains 500 user records, sorted by name
  // the groups variable contains the first
  // letter groups -> ['A', 'B', 'C'], etc.
  // finally, the groupCounts specifies how many items each
  // group has -> [ 20, 30, 15, 10 ], etc.
  const { users, groups, groupCounts } = generateGroupedUsers(500)
  const virtuoso = useRef(null)
  const [groupIndices, setGroupIndices] = useState([])

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <GroupedVirtuoso
          ref={virtuoso}
          groupIndices={indices => {
            if (groupIndices.length !== indices.length) {
              setGroupIndices(indices)
            }
          }}
          style={{ height: '600px', width: '300px' }}
          groupCounts={groupCounts}
          group={index => {
            return <ExampleGroup>{groups[index]}</ExampleGroup>
          }}
          item={index => {
            return <UserItem user={users[index]} index={index} />
          }}
        />
      </div>

      <ul
        style={{
          marginLeft: '1rem',
          listStyle: 'none',
          fontSize: '0.8rem',
        }}
      >
        {groupIndices.map((itemIndex, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                virtuoso.current.scrollToIndex(itemIndex)
              }}
            >
              {groups[index]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
