import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { Virtuoso } from 'react-virtuoso'
import { getUser } from './FakeData'
import { UserItem } from './ExampleComponents'

const GenerateItem = index => {
  return <UserItem user={getUser(index)} index={index} />
}

export default () => {
  const [total, setTotal] = useState(0)
  const items = useRef([])
  const loading = useRef(false)

  // the setTimeout below simulates a network request.
  // In the real world, you can fetch data from a service.
  // the setTotal call will trigger a refresh for the list,
  // so make sure you call it last
  const loadMore = useCallback(() => {
    if (loading.current) {
      return
    }
    loading.current = true

    setTimeout(() => {
      for (let index = total; index < total + total + 20; index++) {
        items.current = [...items.current, getUser(index)]
      }
      loading.current = false
      setTotal(items.current.length)
    }, 500)
  }, [])

  useEffect(() => {
    loadMore()
  }, [])

  return (
    <Virtuoso
      style={{ width: '400px', height: '300px' }}
      totalCount={total}
      item={GenerateItem}
      endReached={() => loadMore()}
      footer={() => {
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            Loading...
          </div>
        )
      }}
    />
  )
}
