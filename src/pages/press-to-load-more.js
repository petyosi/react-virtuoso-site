import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/PressToLoadMore'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="PressToLoadMore" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example that loads more content with a press to load more button at the end of the list"
      />
    </Helmet>
    <h2>Press to load more</h2>
    <p>
      The footer render property can be used to host a load more
      button that appends more items to the list.
    </p>
    <p>
      Scroll to the bottom of the list and press the load more button
      to load 20 more items.
    </p>
    <Example />
  </Layout>
)
