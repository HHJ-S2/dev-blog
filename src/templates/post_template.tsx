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

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: PostPageItem[]
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = edges[0]

  return (
    <Template>
      <PostHead {...frontmatter} />
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
