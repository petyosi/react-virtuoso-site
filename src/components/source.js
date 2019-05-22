import React, { useRef, useEffect, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Prism from './prism'
import sdk from '@stackblitz/sdk'

export default ({ path }) => {
  const data = useStaticQuery(graphql`
    query SourceQuery {
      allSources {
        key
        source
      }
    }
  `)

  const source = data.allSources.find(node => node.key === path)
    .source
  const fakeData = data.allSources.find(
    node => node.key === 'FakeData'
  ).source
  const exampleComponents = data.allSources.find(
    node => node.key === 'ExampleComponents'
  ).source

  const openStackblitz = useCallback(() => {
    const index = `
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Example from './example'

ReactDOM.render(<Example />, document.getElementById('root'))
`

    const html = `<div id="root"></div>`

    // Create the project payload.
    const project = {
      files: {
        'example.js': source,
        'FakeData.js': fakeData,
        'ExampleComponents.js': exampleComponents,
        'index.js': index,
        'index.html': html,
      },
      title: 'React Virtuoso Example',
      description: 'Created with <3 by the StackBlitz SDK!',
      template: 'create-react-app',
      dependencies: {
        'react-virtuoso': 'latest',
        faker: '4.1.0',
        lodash: '4.17.11',
        'styled-components': '4.2.0',
      },
      tags: ['react-virtuoso'],
    }

    sdk.openProject(project, { openFile: 'example.js' })
  }, [])

  const codeRef = useRef(null)

  useEffect(() => {
    codeRef.current.innerHTML = Prism.highlight(
      source,
      Prism.languages.jsx,
      'jsx'
    )
  }, [])

  return (
    <>
      <button
        onClick={openStackblitz}
        style={{
          background: 'transparent',
          border: '1px solid white',
          color: 'white',
          margin: '1rem',
          fontSize: '1.04rem',
        }}
      >
        Edit in StackBlitz
      </button>

      <pre className="language-jsx">
        <code ref={codeRef} className="language-jsx">
          {source}
        </code>
      </pre>
    </>
  )
}
