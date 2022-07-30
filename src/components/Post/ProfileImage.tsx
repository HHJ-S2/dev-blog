import React, { FunctionComponent } from 'react'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/69304579?v=4'

const ProfileImage: FunctionComponent = function () {
  return (
    <div className={'flex justify-center'}>
      <img
        className={'h-14 w-auto rounded-full'}
        src={PROFILE_IMAGE_LINK}
        alt={'Profile Image'}
      />
    </div>
  )
}

export default ProfileImage
