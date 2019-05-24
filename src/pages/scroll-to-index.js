import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/ScrollToIndex'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="ScrollToIndex" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example with large data set with dynamic height."
      />
    </Helmet>
    <h2>Scroll to index</h2>

    <p>
      The Virtuoso component exposes an imperative{' '}
      <code>scrollToIndex</code> method, which can be used to scroll
      the passed index into view.
    </p>

    <p>
      The <code>scrollToIndex</code> method accepts either{' '}
      <code>number</code> or{' '}
      <code>
        &#123; index: number, align: 'start' | 'center' | 'end' &#125;
      </code>{' '}
      as an argument.
    </p>

    <Example />
  </Layout>
)
