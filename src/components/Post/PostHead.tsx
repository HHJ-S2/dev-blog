import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostHeadInfo from './PostHeadInfo'
import { Category } from 'data'

interface Props {
  title: string
  date: string
  categories: Category[]
}

const PostHead: FunctionComponent<Props> = function ({
  title,
  date,
  categories,
}) {
  return (
    <StyledPostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
    </StyledPostHeadWrapper>
  )
}

const StyledPostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(60deg, #29323c 0%, #485563 100%);
`

export default PostHead
