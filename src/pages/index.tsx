import React, { FunctionComponent, useMemo } from 'react'
import { CategoryList, PostList, Introduction } from 'components/Main'
import queryString, { ParsedQuery } from 'query-string'
import { graphql } from 'gatsby'
import { Template } from 'components/Common'
import { Post } from 'data'

interface Props {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: Post[]
    }
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
        siteUrl: string
      }
    }
    file: {
      publicURL: string
    }
  }
}

interface CatagoryList {
  selectedCategory: string
  categoryList: { [key: string]: number }
}

const IndexPage: FunctionComponent<Props> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CatagoryList['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: Post,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Template title={title} description={description} url={siteUrl}>
      <Introduction title={title} />
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  )
}

export default IndexPage

export const getMyQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
