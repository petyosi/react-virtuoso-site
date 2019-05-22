import React from 'react'
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

  return (
    <GroupedVirtuoso
      style={{ height: '350px', width: '400px' }}
      groupCounts={groupCounts}
      group={index => {
        return <ExampleGroup>{groups[index]}</ExampleGroup>
      }}
      item={index => {
        return <UserItem user={users[index]} index={index} />
      }}
    />
  )
}
