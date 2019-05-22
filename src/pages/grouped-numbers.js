import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/GroupedNumbers'

export default () => (
  <Layout sidebar={() => <Source path="GroupedNumbers" />}>
    <h2>Grouped 10 000 numbers</h2>
    <p>
      The simplest possible grouping scenario; this example uses the{' '}
      <code>GroupedVirtuoso</code> component to render 10 000 items in
      groups of 10.
    </p>
    <Example />
  </Layout>
)
