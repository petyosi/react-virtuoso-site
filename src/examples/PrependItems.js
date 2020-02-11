import React, { useState, useRef } from 'React'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

export default () => {
  const virtuoso = useRef(null)
  const initialIndexOffset = React.useRef(10000)
  const [users, setUsers] = useState(
    Array(200)
      .fill(true)
      .map((_, index) => getUser(initialIndexOffset.current + index))
  )
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Virtuoso
          totalCount={users.length}
          ref={virtuoso}
          item={index => (
            <UserItem user={users[index]} index={index} />
          )}
          style={{ height: '400px', width: '350px' }}
        />
      </div>
      <div>
        <ul className="knobs">
          <li>
            <button
              onClick={() => {
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
                virtuoso.current.adjustForPrependedItems(
                  usersToPrepend
                )
                return false
              }}
            >
              Prepend 100 items
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
