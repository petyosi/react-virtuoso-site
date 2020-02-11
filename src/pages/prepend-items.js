import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/PrependItems'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="PrependItems" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example with prepending items while preserving item indexes."
      />
    </Helmet>
    <h2>Prepending Items</h2>

    <p>
      Appending items to the list is straightforward - as the items at
      the bottom will not displace the currently rendered ones.
    </p>

    <p>
      Prepending items is somewhat more complex, because the current
      items should remain at their location and their indexes should
      not be offset.
    </p>
    <p>
      This example shows how to increase the item count and instruct
      the component that you are prepending items.
    </p>
    <Example />
  </Layout>
)
