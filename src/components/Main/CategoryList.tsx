import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export interface Props {
  selectedCategory: string
  categoryList: { [key: string]: number }
}

const CategoryList: FunctionComponent<Props> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <div className={'container pt-14 py-4'}>
      <div className={'space-x-4'}>
        {Object.entries(categoryList).map(([name, count]) => (
          <Link
            to={`/?category=${name}`}
            key={name}
            className={
              name === selectedCategory ? 'text-blue-600' : 'text-slate-500'
            }
          >
            <>
              #{name}({count})
            </>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
