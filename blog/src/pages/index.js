import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import CourseResume from "../components/courseResume"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog | Lista de cursos" />
      {posts.map(({ node }) => {
        
        return (
          <CourseResume node={node} />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, 
    filter: {fileAbsolutePath: {regex: "/(cursos)/"}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MM, YYYY")
          title
          description
        }
      }
    }
  }
  }
`
