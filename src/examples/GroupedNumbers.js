import React from 'react'
import { GroupedVirtuoso } from 'react-virtuoso'
import {
  ExampleGroup,
  ExampleListItem,
  ExampleUserInfo,
} from './ExampleComponents'

export default () => {
  const groupCounts = []
  for (let index = 0; index < 1000; index++) {
    groupCounts.push(10)
  }

  return (
    <GroupedVirtuoso
      style={{ height: '500px', width: '200px' }}
      groupCounts={groupCounts}
      group={index => {
        return (
          <ExampleGroup>
            Group {index * 10} &ndash; {index * 10 + 10}
          </ExampleGroup>
        )
      }}
      item={(index, groupIndex) => {
        return (
          <ExampleListItem even={index % 2 === 0}>
            <ExampleUserInfo title={`Number ${index}`}>
              {index} (group {groupIndex})
            </ExampleUserInfo>
          </ExampleListItem>
        )
      }}
    />
  )
}
