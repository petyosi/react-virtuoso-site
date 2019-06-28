import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/GridResponsiveColumns'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="GridResponsiveColumns" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso Grid live example with responsive columns"
      />
    </Helmet>
    <h2>Grid With Responsive Columns</h2>
    <p>
      The <code>VirtuosoGrid</code> component displays{' '}
      <strong>equally sized items</strong>, while supporting multiple
      items per row.
    </p>

    <p>
      The component provides no styling out of the box; the styling
      and the layout of the items should be specified by passing two
      properties - <code>itemClassName</code> and{' '}
      <code>listClassName</code>. It is up to you to implement the
      layout with{' '}
      <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
        Flexbox
      </a>{' '}
      or{' '}
      <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
        CSS grid
      </a>
      . You can use plain old CSS or CSS in JS - the example below
      uses <a href="https://emotion.sh">emotion</a>.
    </p>

    <h3>Responsive Layout</h3>
    <p>
      You can safely use media queries, <code>min-width</code>,
      percentages etc. in the item layout definitions. The grid
      observes the container / item dimensions and recalculates the
      scroll size accordingly.
    </p>

    <p>
      Resize your browser and scroll around &ndash; the items
      reposition correctly.
    </p>
    <Example />
  </Layout>
)
