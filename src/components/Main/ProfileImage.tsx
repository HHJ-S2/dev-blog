import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/69304579?v=4'

const ProfileImage: FunctionComponent = function () {
  return (
    <StyledProfileImageWrapper src={PROFILE_IMAGE_LINK} alt={'Profile Image'} />
  )
}

const StyledProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export default ProfileImage
