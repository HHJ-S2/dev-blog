import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

interface Props {
  title: string
  description?: string
}

const Introduction: FunctionComponent<Props> = function ({ title }) {
  return (
    <header className={'container py-10'}>
      <div className={'flex justify-between items-center'}>
        <h1 className={'text-2xl font-bold'}>{title}</h1>
        <nav className={'flex space-x-10'}>
          <Link
            to={''}
            className="text-xl font-medium text-slate-600 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to={''}
            className="text-xl font-medium text-slate-600 hover:text-blue-600"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Introduction
