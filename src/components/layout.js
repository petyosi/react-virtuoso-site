import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Virtuoso</title>
    </Helmet>
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Introduction</Link>
          </li>
          <li>
            <Link to="/hello">10000 Items</Link>
          </li>
          <li>
            <Link to="/top-items">Top Items</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/auto-resizing">Auto Resizing</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  </>
)
