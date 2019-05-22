import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

export default ({ data }) => {
  return (
    <Layout>
      <ReactMarkdown source={data.readme} />
    </Layout>
  )
}
export const query = graphql`
  query {
    readme
  }
`
