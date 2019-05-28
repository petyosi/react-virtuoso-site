import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/MaterialUI'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout
    sidebar={() => (
      <Source
        path="MaterialUI"
        libs={{ '@material-ui/core': '4.0.0' }}
      />
    )}
  >
    <Helmet>
      <meta
        name="description"
        content="Material-UI virtualized list with sticky headers and endless scrolling integrated with React Virtuoso"
      />
    </Helmet>
    <h2>Material-UI </h2>
    <p>
      The example below replaces the structure with Material-UI
      components. The list displayes 500 records grouped by name and
      loaded on demand as the user scrolls down.
    </p>
    <Example />
  </Layout>
)
