import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import logo from '../assets/logo.svg'
import '../styles/site.css'

export default ({ children, sidebar }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        React Virtuoso - virtual list component + batteries included
      </title>
      <meta
        name="keywords"
        content="react virtualized list, react virtual window, dynamic height, react virtual list react grouped virtual list, react list component autosize, react virtuoso, react virtualized alternative"
      />
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
              <Link to="/" activeClassName="active">
                Introduction
              </Link>
            </dd>
            <dt>Features Overview</dt>
            <dd>
              <Link to="/hello/" activeClassName="active">
                100 000 Items
              </Link>
            </dd>
            <dd>
              <Link to="/top-items/" activeClassName="active">
                Top Items
              </Link>
            </dd>
            <dd>
              <Link to="/footer/">Footer</Link>
            </dd>
            <dd>
              <Link to="/auto-resizing/">Auto Resizing</Link>
            </dd>
            <dd>
              <Link to="/scroll-handling/">Scroll Handling</Link>
            </dd>
            <dd>
              <Link to="/scroll-to-index/">Scroll to Index</Link>
            </dd>
            <dt>Grouping</dt>
            <dd>
              <Link to="/grouped-numbers/">Grouped Numbers</Link>
            </dd>
            <dd>
              <Link to="/grouped-by-first-letter/">
                Grouped by First Letter
              </Link>
            </dd>
            <dd>
              <Link to="/grouped-with-load-on-demand/">
                Grouped with Load on Demand
              </Link>
            </dd>
            <dd>
              <Link to="/scroll-to-group/">Scroll to Group</Link>
            </dd>
            <dt>Scenarios</dt>
            <dd>
              <Link to="/press-to-load-more/">
                Press to Load More
              </Link>
            </dd>
            <dd>
              <Link to="/endless-scrolling/">Endless Scrolling</Link>
            </dd>
            <dd>
              <Link to="/material-ui-endless-scrolling/">
                Material-UI
              </Link>
            </dd>

            <dt>Customizing Markup</dt>
            <dd>
              <Link to="/custom-scroll-container/">
                Custom Scroll Container
              </Link>
            </dd>
            <dd>
              <Link to="/customize-structure/">
                Customize Rendering
              </Link>
            </dd>
          </dl>
        </nav>

        <div style={{ marginLeft: '2rem' }}>
          <div>
            <a
              href="https://github.com/petyosi/react-virtuoso"
              title="Star the project on Github"
            >
              <img src="https://badgen.net/github/stars/petyosi/react-virtuoso" />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/petyosi"
              title="Follow me on twitter for Virtuoso updates"
            >
              <img src="https://badgen.net/twitter/follow/petyosi" />
            </a>
          </div>
          <div>
            <a
              href="https://bundlephobia.com/result?p=react-virtuoso@0.7.0"
              title="Bundlephobia size report"
            >
              <img src="https://badgen.net/bundlephobia/minzip/react-virtuoso" />
            </a>
          </div>
        </div>
      </div>

      <div id="main">
        <div id="content">{children}</div>
        {sidebar && <div id="sidebar">{sidebar()}</div>}
      </div>
    </div>
  </>
)
