import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/ReactSortableHoc'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="ReactSortableHoc" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example with React Sortable HOC"
      />
    </Helmet>
    <h2>React Sortable HOC</h2>

    <p>
      The example below integrates the library with{' '}
      <a href="https://github.com/clauderic/react-sortable-hoc">
        React Sortable HOC
      </a>
      . The example is contributed by{' '}
      <a href="https://github.com/mitchellwarr">mitchellwarr</a>.
    </p>
    <Example />
  </Layout>
)
