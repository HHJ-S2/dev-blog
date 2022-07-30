import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import { PostHead, PostContent, CommentWidget } from 'components/Post'
import { PostFrontmatter } from 'data'

interface PostPageItem {
  node: {
    html: string
    frontmatter: PostFrontmatter
  }
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostPageItem[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<Props> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href}>
      <PostHead title={title} date={date} categories={categories} />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
