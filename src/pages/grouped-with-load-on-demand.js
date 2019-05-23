import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/GroupWithLoadOnDemand'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="GroupWithLoadOnDemand" />}>
    <Helmet>
      <meta
        name="description"
        content="React Grouped Virtuoso live example with records grouped by first letter"
      />
    </Helmet>
    <h2>Grouped by First Letter (Load on Demand)</h2>
    <p>
      The <code>GroupedVirtuoso</code> component accepts a{' '}
      <code>footer</code> render prop, which can be used to host a
      load more button that appends more items to the existing ones.
    </p>
    <p>
      To add additional items to the groups, you should re-calculate
      the <code>groupCounts</code> property value with the group
      values of the newly loaded items. Check the source code of this
      example for a possible implementation.
    </p>
    <Example />
  </Layout>
)
