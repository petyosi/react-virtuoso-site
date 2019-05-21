import React from "react"
import Layout from "../components/layout"
import Source from "../components/source"
import Hello from "../examples/hello"

export default () => (
  <Layout>
    <h2> 100 000 Items </h2>
    <p>
      The Virtuoso component is built for the display of huge lists - you do not
      have to configure anything apart from the total item count and the
      <code>item</code> prop renderer.
    </p>

    <p>
      The prop render callback accepts <code>index</code> parameter, which
      specifies the absolute index of the item being rendered; It is up to you
      to build and return the respective content for it.
    </p>

    <p>
      For a detailed overview and usage instructions, check the{" "}
      <a href="https://github.com/petyosi/react-virtuoso">Github README</a>.
    </p>
    <Hello />
    <Source path="Hello" />
  </Layout>
)
