import React, { FunctionComponent } from 'react'

interface Props {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<Props> = function ({
  title,
  date,
  categories,
}) {
  return (
    <div className={'text-center'}>
      <p className={'pt-10 pb-4 text-sm text-slate-400'}>{date}</p>
      <h1 className={'text-2xl font-semibold'}>{title}</h1>
      <p className={'py-5 text-lg text-blue-600'}>{categories.join(' / ')}</p>
    </div>
  )
}

export default PostHeadInfo
