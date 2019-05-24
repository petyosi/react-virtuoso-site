import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/CustomScrollContainer'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="CustomScrollContainer" />}>
    <Helmet>
      <meta
        name="description"
        content="React Grouped Virtuoso example with custom scroll container - can be used to integrate custom scrollbar components."
      />
    </Helmet>
    <h2>Custom Scroll Container</h2>
    <p>
      The <code>Virtuoso</code> component accepts an optional
      ScrollContainer property, which can be used to customize the
      scrollable element, allowing for example integration with{' '}
      <a href="https://github.com/malte-wessel/react-custom-scrollbars">
        custom scrollbars
      </a>
      .
    </p>
    <p>
      Check the comments in the source code pane for more details.
    </p>
    <Example />
  </Layout>
)
