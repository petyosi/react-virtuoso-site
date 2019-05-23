import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <Layout>
      <ReactMarkdown source={data.readme} />
      <Helmet>
        <meta
          name="description"
          content="React Virtuoso is a simple React virtualized list component with support for dynamic item heights, resizing, grouping, footer and more."
        />
      </Helmet>
    </Layout>
  )
}
export const query = graphql`
  query {
    readme
  }
`
