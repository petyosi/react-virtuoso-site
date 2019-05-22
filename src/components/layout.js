import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import GitHubButton from 'react-github-btn'
import logo from '../assets/logo.svg'

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

        #root {
          display: flex;
        }

        #main {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        #sidebar, pre {
          background: #272822;
        }

        #sidebar {
            overflow: auto;
        }

        pre {
          padding: 0.5rem;
          margin-bottom: 2rem;
          white-space: pre-wrap !important;
        }

        #sidebar pre {
          white-space: pre-wrap;
        }

        code[class*="language-"] {
          white-space: pre-wrap !important;
        }

        #content {
            padding: 2rem 7rem 2rem 0;
        }

        #nav {
          flex-grow: 0;
          width: 20rem;
          flex-basis: 20rem;
          flex-shrink: 0;
        }

        @media only screen and (max-width: 768px) {
          #root {
            flex-direction: column;
          }

          #sidebar {
            display: none;
          }

          #content {
            padding-left: 2rem;
          }
        }

        @media only screen and (min-width: 1280px) {
          #main {
            flex-direction: row;
            align-items: stretch;
          }

          #content {
            flex-grow: 1;
            flex-shrink: 2;
            min-width: 350px;
            max-width: 750px;
          }

          #sidebar {
            flex-grow: 5;
            flex-shrink: 0;
          }
        }





          `}
      </style>
    </Helmet>

    <div id="root">
      <div id="nav">
        <Link to="/">
          <img
            src={logo}
            alt="React Virtuoso"
            style={{ width: '80%', margin: '2rem 2rem 0 0rem' }}
          />
        </Link>

        <nav style={{ padding: '2rem' }}>
          <dl>
            <dd>
              <Link to="/">Introduction</Link>
            </dd>
            <dt>Features Overview</dt>
            <dd>
              <Link to="/hello">10000 Items</Link>
            </dd>
            <dd>
              <Link to="/top-items">Top Items</Link>
            </dd>
            <dd>
              <Link to="/footer">Footer</Link>
            </dd>
            <dd>
              <Link to="/auto-resizing">Auto Resizing</Link>
            </dd>
            <dd>
              <Link to="/scroll-handling">Scroll Handling</Link>
            </dd>
            <dt>Grouping</dt>
            <dd>
              <Link to="/grouped-numbers">Grouped Numbers</Link>
            </dd>
            <dd>
              <Link to="/grouped-by-first-letter">
                Grouped by First Letter
              </Link>
            </dd>
            <dd>
              <Link to="/grouped-with-load-on-demand">
                Grouped with Load on Demand
              </Link>
            </dd>
            <dt>Scenarios</dt>
            <dd>
              <Link to="/press-to-load-more">Press to Load More</Link>
            </dd>
            <dd>
              <Link to="/endless-scrolling">Endless scrolling</Link>
            </dd>
          </dl>
        </nav>

        <div style={{ margin: '0 2rem 0 2rem' }}>
          <GitHubButton
            href="https://github.com/petyosi/react-virtuoso"
            data-size="large"
            data-show-count="true"
            aria-label="Star petyosi/react-virtuoso on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </div>

      <div id="main">
        <div id="content">{children}</div>
        {sidebar && <div id="sidebar">{sidebar()}</div>}
      </div>
    </div>
  </>
)
