import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/footer'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="Footer" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso footer property example renders additional content after the list data"
      />
    </Helmet>
    <h2>Footer</h2>
    <p>
      The Virtuoso component accepts an optional <code>footer</code>{' '}
      render property which is appended at the end of the list. The
      footer can be used for loading indicators or load more buttons.
    </p>
    <p>
      Scroll to the bottom of the list to see{' '}
      <code>-- end reached --</code>.
    </p>
    <Example />
  </Layout>
)
