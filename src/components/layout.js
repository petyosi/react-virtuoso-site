import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ children, sidebar }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Virtuoso</title>
      <style>
        {`
        html, body, body > div, body > div > div, body > div > div > div {
          margin: 0;
          padding: 0;
          height: 100%;
          min-height: 100%;
        }

        body > div > div > div {
          align-items: stretch;
        }

          `}
      </style>
    </Helmet>

    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 0 }}>
        <nav style={{ padding: '2rem' }}>
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
            <li>
              <Link to="/scroll-handling">Scroll Handling</Link>
            </li>
            <li>
              <Link to="/grouped-numbers">Grouped Numbers</Link>
            </li>
            <li>
              <Link to="/grouped-by-first-letter">
                Grouped by First Letter
              </Link>
            </li>
            <li>
              <Link to="/grouped-with-load-on-demand">
                Grouped with Load on Demand
              </Link>
            </li>
            <li>
              <Link to="/press-to-load-more">Press to Load More</Link>
            </li>
            <li>
              <Link to="/endless-scrolling">Endless scrolling</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div style={{ flexGrow: 4 }}>
        <div style={{ maxWidth: '680px' }}>{children}</div>
      </div>
      {sidebar && (
        <div
          style={{
            flexGrow: 2,
            maxWidth: '600px',
            fontSize: '80%',
            background: '#272822',
          }}
        >
          {sidebar()}
        </div>
      )}
    </div>
  </>
)
