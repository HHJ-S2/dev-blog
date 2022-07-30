import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Template } from 'components/Common'
import { Introduction } from 'components/Main'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
        siteUrl: string
      }
    }
  }
}

const PostsPage: FunctionComponent<Props> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  },
}) {
  return (
    <Template title={title} description={description} url={siteUrl}>
      <p>준비중</p>
    </Template>
  )
}

export const getMyQuery = graphql`
  query Posts {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default PostsPage
