import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/GroupedByFirstLetter'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="GroupedByFirstLetter" />}>
    <Helmet>
      <meta
        name="description"
        content="React Grouped Virtuoso live example with records grouped by first letter."
      />
    </Helmet>
    <h2>Grouped by First Letter</h2>
    <p>
      This is a slightly more complex <code>GroupedVirtuoso</code>{' '}
      example, which displays 500 user records, grouped by the first
      letter of their name.
    </p>
    <p>
      Check the comments in the source code pane for more details.
    </p>
    <Example />
  </Layout>
)
