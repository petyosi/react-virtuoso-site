import React from 'react';
import Layout from '../components/layout';
import Source from '../components/source';
import Example from '../examples/ScrollHandling';

export default () => (
  <Layout sidebar={() => <Source path="ScrollHandling" />}>
    <h2>Handling scrolling</h2>
    <p>
      Loading and rendering images while scrolling ruins the scrolling
      performance.
    </p>
    <p>
      To deal with this, the Virtuoso component emits{' '}
      <code>scrollingStateChange</code> when the user starts / stops scrolling.
      The callback receives <code>true</code> when the user starts scrolling and{' '}
      <code>false</code> shortly after the last scroll event.
    </p>
    <p>
      Handling this event can be used to optimize performance by
      hiding/replacing certain elements in the items.
    </p>
    <p>
      In the example above, the image avatars are replaced with placeholders
      when the user starts scrolling.
    </p>
    <Example />
  </Layout>
);
