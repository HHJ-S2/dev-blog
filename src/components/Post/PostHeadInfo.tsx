import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
  const goBackPage = () => window.history.back()

  return (
    <StyledPostHeadInfoWrapper>
      <StyledPrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </StyledPrevPageIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledPostData>
        <div>{categories.join(' / ')}</div>
        <div>{date}</div>
      </StyledPostData>
    </StyledPostHeadInfoWrapper>
  )
}

const StyledPostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffffff;
`

const StyledPrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

const StyledTitle = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;
`

const StyledPostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`

export default PostHeadInfo
