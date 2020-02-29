import React, { useState, useRef, useCallback } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

export default () => {
  const virtuoso = useRef(null)
  const initialIndexOffset = useRef(10000)
  const [users, setUsers] = useState(
    Array(200)
      .fill(true)
      .map((_, index) => getUser(10000 + index))
  )

  const prependItems = useCallback(() => {
    const usersToPrepend = 100
    initialIndexOffset.current -= usersToPrepend
    setUsers([
      ...Array(usersToPrepend)
        .fill(true)
        .map((_, index) =>
          getUser(initialIndexOffset.current + index)
        ),
      ...users,
    ])
    virtuoso.current.adjustForPrependedItems(usersToPrepend)
    return false
  }, [initialIndexOffset, users, setUsers])

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Virtuoso
          ref={virtuoso}
          totalCount={users.length}
          item={index => (
            <UserItem user={users[index]} index={index} />
          )}
          style={{ height: '400px', width: '350px' }}
        />
      </div>
      <div>
        <ul className="knobs">
          <li>
            <button onClick={prependItems}>Prepend 100 items</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
