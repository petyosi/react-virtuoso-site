import React, { useState, useRef } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => {
  const [align, setAlign] = useState('start')
  const virtuoso = useRef(null)
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Virtuoso
          totalCount={1000}
          overscan={200}
          ref={virtuoso}
          item={GenerateItem}
          style={{ height: '400px', width: '350px' }}
        />
      </div>
      <div>
        <ul className="knobs">
          <li>
            <button
              onClick={() => {
                virtuoso.current.scrollToIndex({
                  index: 0,
                  align,
                })
                return false
              }}
            >
              Scroll To 1
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                virtuoso.current.scrollToIndex({
                  index: 499,
                  align,
                })
                return false
              }}
            >
              Scroll To 500
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                virtuoso.current.scrollToIndex({
                  index: 999,
                  align,
                })
                return false
              }}
            >
              Scroll To 1000
            </button>
          </li>
          <li>
            <label>
              Align:
              <select
                value={align}
                onChange={e => setAlign(e.target.value)}
              >
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
              </select>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
