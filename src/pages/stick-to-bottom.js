import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/StickToBottom'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="StickToBottom" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso live example for sticking to bottom and following the updates of the list, similar to tail -f"
      />
    </Helmet>
    <h2>Stick to Bottom</h2>
    <p>
      The scenario in this example "follows" the live updates of a
      list, by auto-scrolling to the last item when{' '}
      <code>totalCount</code> is increased. The{' '}
      <code>atBottomStateChange</code> callback is used to suspend /
      resume the updates.
    </p>

    <Example />
  </Layout>
)
