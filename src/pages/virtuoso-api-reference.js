import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  return (
    <Layout>
      <ReactMarkdown source={data.virtuosoApi} />
      <Helmet>
        <meta
          name="description"
          content="List and description of all React Virtuoso component properties and methods."
        />
      </Helmet>
    </Layout>
  )
}
export const query = graphql`
  query {
    virtuosoApi
  }
`
