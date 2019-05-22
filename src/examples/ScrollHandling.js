import React, { useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import {
  ExampleListItem,
  ExampleAvatar,
  ExampleUserInfo,
  ExampleImgAvatar,
} from './ExampleComponents'

export default () => {
  const [isScrolling, setIsScrolling] = useState(false)

  return (
    <Virtuoso
      style={{
        height: '400px',
        width: '350px',
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
              <ExampleAvatar style={{ backgroundColor: '#ccc' }}>
                &nbsp;
              </ExampleAvatar>
            ) : (
              <ExampleImgAvatar src={user.avatar} />
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
