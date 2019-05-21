import React from "react"
import Layout from "../components/layout"
import Source from "../components/source"
import Example from "../examples/TopItems"

export default () => (
  <Layout>
    <h2>Top Items Example</h2>
    <p>
      The Virtuoso component accepts an optional <code>topItems</code> number
      property that allows you to pin the first <code>N</code> items of the
      list.
    </p>
    <p>
      Scroll the list below - the first two items remain fixed and always
      visible.
    </p>

    <Example />
    <Source path="TopItems" />
  </Layout>
)
