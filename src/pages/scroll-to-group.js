import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/ScrollToGroup'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="ScrollToGroup" />}>
    <Helmet>
      <meta
        name="description"
        content="React Grouped Virtuoso live example with UI to scroll to a group."
      />
    </Helmet>
    <h2>Scrolling to a group</h2>

    <p>
      The example below re-creates the UI of the iOS contacts
      listview. The component exposes <code>groupIndices</code>{' '}
      property, which outputs the calculated item indices of the group
      headers.
    </p>
    <p>
      Using that, we can build an UI (in this case, a side list with
      all first letters), which scrolls to a given group.
    </p>
    <Example />
  </Layout>
)
