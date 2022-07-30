import ProfileImage from 'components/Post/ProfileImage'
import React, { FunctionComponent } from 'react'
import PostHeadInfo from './PostHeadInfo'

interface Props {
  title: string
  date: string
  categories: string[]
}

const PostHead: FunctionComponent<Props> = function ({
  title,
  date,
  categories,
}) {
  return (
    <header className={'container py-20'}>
      <ProfileImage />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </header>
  )
}

export default PostHead
