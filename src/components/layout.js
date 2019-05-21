import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';

export default ({children, sidebar}) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Virtuoso</title>
    </Helmet>

    <div style={{display: 'flex'}}>
      <div style={{flexGrow: 0}}>
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
      </div>

      <div>{children}</div>
      {sidebar && <div style={{flexGrow: 0, width: '400px'}}>{sidebar()}</div>}
    </div>
  </>
);
