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
    <section ref={containerRef} className={'container divide-y divide-dashed'}>
      {postList.map(({ node: { id, fields, frontmatter } }: Post) => (
        <PostItem {...frontmatter} link={fields?.slug} key={id} />
      ))}
    </section>
  )
}

export default PostList
