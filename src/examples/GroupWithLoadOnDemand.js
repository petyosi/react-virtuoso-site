import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef,
} from 'react'
import { GroupedVirtuoso } from 'react-virtuoso'
import { generateGroupedUsers } from './FakeData'
import { ExampleGroup, UserItem } from './ExampleComponents'

// Slices the total groups to the groups
// which contain the items so far
// for example, if you have [10, 10, 10, 10]
// groups in total, slicing them to 23 will result in [10, 10, 3]
const calculateGroupsSoFar = (totalGroups, count) => {
  const groups = []
  let i = 0
  do {
    const group = totalGroups[i]
    groups.push(Math.min(group, count))
    count -= group
    i++
  } while (count > 0 && i <= totalGroups.length)
  return groups
}

export default () => {
  const { users, groups, groupCounts } = useMemo(
    () => generateGroupedUsers(500),
    []
  )

  const [currentGroupCounts, setCurrentGroupCounts] = useState([])
  const loadedItems = useRef(0)
  const [loading, setLoading] = useState(false)

  const loadMore = useCallback(() => {
    setLoading(true)

    // the set timeout call is just for example purposes.
    // In the real world,
    // this can fetch and append data from a remote server.
    setTimeout(() => {
      loadedItems.current += 50
      setLoading(false)
      setCurrentGroupCounts(
        calculateGroupsSoFar(groupCounts, loadedItems.current)
      )
    }, 500)
  }, [])

  useEffect(loadMore, [])

  return (
    <GroupedVirtuoso
      style={{ height: '500px', width: '500px' }}
      groupCounts={currentGroupCounts}
      group={index => (
        <ExampleGroup>Group {groups[index]}</ExampleGroup>
      )}
      item={index => <UserItem user={users[index]} index={index} />}
      footer={() => {
        return (
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button disabled={loading} onClick={loadMore}>
              {loading ? 'Loading...' : 'Press to load more'}
            </button>
          </div>
        )
      }}
    />
  )
}
