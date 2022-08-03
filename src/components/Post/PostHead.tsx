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
    <header className={'py-20 mb-20 bg-slate-50'}>
      <div className={'container'}>
        <ProfileImage />
        <PostHeadInfo title={title} date={date} categories={categories} />
      </div>
    </header>
  )
}

export default PostHead
