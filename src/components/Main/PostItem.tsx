import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

interface Props {
  title: string
  date: string
  categories: string[]
  summary?: string
  link?: string
}

const PostItem: FunctionComponent<Props> = function ({
  title,
  date,
  categories,
  summary,
  link,
}) {
  return (
    <article className={'py-12'}>
      <p className={'text-xs text-slate-400'}>{date}</p>
      <Link to={link || ''}>
        <h3 className={'py-2 text-2xl font-semibold hover:text-blue-600'}>
          {title}
        </h3>
      </Link>
      <p className={'text-base text-slate-500'}>{summary}</p>
      <div className={'flex space-x-2 pt-4'}>
        {categories.map(category => (
          <p
            key={category}
            className={
              'py-1 px-2 bg-slate-100 rounded-full text-xs text-slate-600'
            }
          >
            {category}
          </p>
        ))}
      </div>
    </article>
  )
}

export default PostItem
