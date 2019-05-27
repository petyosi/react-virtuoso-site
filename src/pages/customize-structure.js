import React from 'react'
import Layout from '../components/layout'
import Source from '../components/source'
import Example from '../examples/CustomizeStructure'
import { Helmet } from 'react-helmet'

export default () => (
  <Layout sidebar={() => <Source path="CustomizeStructure" />}>
    <Helmet>
      <meta
        name="description"
        content="React Virtuoso example with custom components as list and item containers."
      />
    </Helmet>
    <h2>Customize Rendering</h2>
    <p>
      By default, the component structure renders as several nested{' '}
      <code>DIV</code> elements:
    </p>

    <pre>
      <code>{`
      scroller (div) 
        |-viewport (div) 
          |-list (div) 
            |-one or more sticky items (div) 
            |-items (div) 
            |-footer (div)
    `}</code>
    </pre>

    <p>
      The Virtuoso components expose several <code>Container</code>{' '}
      properties which allow you to change the elements rendered.
    </p>

    <p>
      <strong>Notice:</strong> changing the structure elements is in
      general more complex; you need to accept and pass a few
      properties (check the example). Change the containers only if
      you need to do that. Most of the time, you can get away with
      tweaking the <code>item</code>, <code>group</code> and{' '}
      <code>footer</code> render props.
    </p>
    <ul>
      <li>
        <code>ListContainer</code> changes the rendering of the{' '}
        <code>list</code> element which wraps the items.
      </li>
      <li>
        <code>ItemContainer</code> changes the element which wraps
        each item.
      </li>
      <li>
        <code>GroupContainer</code> (available in{' '}
        <code>GroupedVirtuoso</code>) changes the element which wraps
        the group headers.
      </li>
      <li>
        <code>FooterContainer</code> changes the element which the
        footer.
      </li>
    </ul>

    <p>
      The example below replaces the <code>DIV</code> elements with{' '}
      <code>UL/LI</code>. Notice that the margins of the elements are
      removed in order for the measurement to work as expected.
    </p>
    <Example />
  </Layout>
)
