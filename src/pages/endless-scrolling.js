import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/EndlessScrolling'

export default () => (
  <Layout sidebar={() => <Source path="EndlessScrolling" />}>
    <h2> Endless Scrolling </h2>
    <p>
      The <code>endReached</code> callback can be used to
      automatically load more items when the user scrolls to the
      bottom of the list.
    </p>
    <p>
      Scroll fast to the bottom of the list to see additional items
      being loaded.
    </p>
    <Example />
  </Layout>
)
