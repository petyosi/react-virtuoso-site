import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/EndlessScrolling'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="EndlessScrolling" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso endless scrolling / load on demand data example"
      />
    </Helmet>
    <h2> Endless Scrolling </h2>
    <p>
      The <code>endReached</code> callback can be used to
      automatically load more items when the user scrolls to the
      bottom of the list. If you would like to load items more
      aggressively, you can increase the <code>overscan</code> value.
    </p>
    <p>
      Scroll fast to the bottom of the list to see additional items
      being loaded.
    </p>
    <Example />
  </Layout>
)
