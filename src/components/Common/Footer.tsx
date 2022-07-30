import React, { FunctionComponent } from 'react'

const Footer: FunctionComponent = function () {
  return (
    <footer className={'mt-10 py-10 bg-slate-50'}>
      <div className={'container'}>
        <p className={'text-base text-slate-400 text-center'}>
          Copyright © 2022 HHJ
        </p>
      </div>
    </footer>
  )
}

export default Footer
