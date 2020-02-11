import React, { useState, useRef } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => {
  const [total, setTotal] = useState(1000)
  const appendInterval = useRef(null)
  return (
    <Virtuoso
      initialTopMostItemIndex={999}
      totalCount={total}
      atBottomStateChange={atBottom => {
        clearInterval(appendInterval.current)
        if (atBottom) {
          appendInterval.current = setInterval(() => {
            console.log('appending items')
            setTotal(total + 3)
          }, 200)
        }
      }}
      item={GenerateItem}
      followOutput={true}
      style={{ height: '400px', width: '350px' }}
    />
  )
}
