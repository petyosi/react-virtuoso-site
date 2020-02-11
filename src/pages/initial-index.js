import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/InitialIndex'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="InitialIndex" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso example for initial display of the list from the middle or from the bottom."
      />
    </Helmet>
    <h2>Initial Index</h2>

    <p>
      The <code>initialTopMostItemIndex</code> property changes the
      initial location of the component.
      <strong>Note:</strong> Use this property only to set the initial
      location. If you want to change the location after the component
      is mounted, using the <code>scrollToIndex</code> method is
      faster.
    </p>

    <Example />
  </Layout>
)
