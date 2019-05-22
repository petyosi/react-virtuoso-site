import React, { useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import {
  ExampleListItem,
  ExampleAvatar,
  ExampleUserInfo,
} from './ExampleComponents'

export default () => {
  const [isScrolling, setIsScrolling] = useState(false)

  return (
    <Virtuoso
      style={{
        height: '350px',
        width: '80%',
        maxWidth: '500px',
      }}
      totalCount={100}
      scrollingStateChange={scrolling => {
        console.log({ scrolling })
        setIsScrolling(scrolling)
      }}
      item={index => {
        const user = getUser(index)
        const title = `${index + 1}. ${user.name}`
        return (
          <ExampleListItem even={index % 2 === 0}>
            {isScrolling ? (
              <ExampleAvatar
                style={{ backgroundColor: '#ccc' }}
              >
                &nbsp;
              </ExampleAvatar>
            ) : (
              <img
                src={user.avatar}
                style={{
                  width: '50px',
                  height: '50px',
                  flex: 'none',
                  borderRadius: '50%',
                }}
              />
            )}

            <ExampleUserInfo title={title}>
              {user.description}
            </ExampleUserInfo>
          </ExampleListItem>
        )
      }}
    />
  )
}
