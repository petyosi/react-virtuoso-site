import React from "react"
import Layout from "../components/layout"
import Source from "../components/source"
import Hello from "../examples/AutoResizing"

export default () => (
  <Layout>
    <h2>Automatic Resizing</h2>
    <p>
      The Virtuoso component will automatically handle changes of the
      items&apos; heights (due to content being resized, images being loaded,
      etc). You don&apos;t have to configure anything additional.
    </p>
    <p>
      Resize your browser and scroll the list around &ndash; the items
      reposition correctly without overlap.
    </p>
    <Hello />
    <Source path="AutoResizing" />
  </Layout>
)
