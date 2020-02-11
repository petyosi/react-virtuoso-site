import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/RangeChanged'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="RangeChanged" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example callback for list contents change."
      />
    </Helmet>
    <h2>Listen on displayed list changes.</h2>
    <p>
      The <code>rangeChanged</code> callback property gets called with
      the start / end indexes of the visible range.
    </p>

    <Example />
  </Layout>
)
