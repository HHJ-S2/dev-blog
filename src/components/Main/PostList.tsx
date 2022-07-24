import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import { Post } from 'data'

interface Props {
  selectedCategory: string
  posts: Post[]
}

const PostList: FunctionComponent<Props> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <StyledPostListWrapper ref={containerRef}>
      {postList.map(({ node: { id, fields, frontmatter } }: Post) => (
        <PostItem {...frontmatter} link={fields?.slug} key={id} />
      ))}
    </StyledPostListWrapper>
  )
}

const StyledPostListWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
  }
`

export default PostList
