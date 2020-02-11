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
        React Virtuoso: virtual list component + batteries included
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
              <Link to="/footer/" activeClassName="active">
                Footer
              </Link>
            </dd>
            <dd>
              <Link to="/auto-resizing/" activeClassName="active">
                Auto Resizing
              </Link>
            </dd>
            <dd>
              <Link to="/scroll-handling/" activeClassName="active">
                Scroll Handling
              </Link>
            </dd>
            <dd>
              <Link to="/scroll-to-index/" activeClassName="active">
                Scroll to Index
              </Link>
            </dd>
            <dd>
              <Link to="/initial-index/" activeClassName="active">
                Initial Index <sup>new</sup>
              </Link>
            </dd>
            <dd>
              <Link
                to="/range-change-callback/"
                activeClassName="active"
              >
                Range Change Callback <sup>new</sup>
              </Link>
            </dd>

            <dt>Grouping</dt>
            <dd>
              <Link to="/grouped-numbers/" activeClassName="active">
                Grouped Numbers
              </Link>
            </dd>
            <dd>
              <Link
                to="/grouped-by-first-letter/"
                activeClassName="active"
              >
                Grouped by First Letter
              </Link>
            </dd>
            <dd>
              <Link
                to="/grouped-with-load-on-demand/"
                activeClassName="active"
              >
                Grouped with Load on Demand
              </Link>
            </dd>
            <dd>
              <Link to="/scroll-to-group/" activeClassName="active">
                Scroll to Group
              </Link>
            </dd>
            <dt>Grid</dt>
            <dd>
              <Link
                to="/grid-responsive-columns/"
                activeClassName="active"
              >
                Responsive columns
              </Link>
            </dd>

            <dt>Scenarios</dt>
            <dd>
              <Link
                to="/press-to-load-more/"
                activeClassName="active"
              >
                Press to Load More
              </Link>
            </dd>
            <dd>
              <Link to="/endless-scrolling/" activeClassName="active">
                Endless Scrolling
              </Link>
            </dd>
            <dd>
              <Link to="/prepend-items" activeClassName="active">
                Prepend Items <sup>new</sup>
              </Link>
            </dd>
            <dd>
              <Link to="/stick-to-bottom" activeClassName="active">
                Stick to Bottom <sup>new</sup>
              </Link>
            </dd>
            <dd>
              <Link
                to="/scroll-seek-placeholders"
                activeClassName="active"
              >
                Scroll Seek Placeholders <sup>new</sup>
              </Link>
            </dd>
            <dd>
              <Link
                to="/material-ui-endless-scrolling/"
                activeClassName="active"
              >
                Material-UI
              </Link>
            </dd>

            <dt>Customizing Markup</dt>
            <dd>
              <Link
                to="/custom-scroll-container/"
                activeClassName="active"
              >
                Custom Scroll Container
              </Link>
            </dd>
            <dd>
              <Link
                to="/customize-structure/"
                activeClassName="active"
              >
                Customize Rendering
              </Link>
            </dd>

            <dt>API Reference</dt>
            <dd>
              <Link to="/virtuoso-api-reference/">Virtuoso</Link>
            </dd>
            <dd>
              <Link
                to="/grouped-virtuoso-api-reference/"
                activeClassName="active"
              >
                Grouped Virtuoso
              </Link>
            </dd>
            <dd>
              <Link
                to="/virtuoso-grid-api-reference/"
                activeClassName="active"
              >
                Virtuoso Grid
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
