import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/ScrollSeekPlaceholders'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="ScrollSeekPlaceholders" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example of scroll seek placeholders."
      />
    </Helmet>
    <h2>Scroll Seek Placeholder</h2>
    <p>
      The <code>scrollSeek</code> property allows you to render a
      placeholder element instead of the actual item if the user
      scrolls too fast.
    </p>

    <Example />
  </Layout>
)
