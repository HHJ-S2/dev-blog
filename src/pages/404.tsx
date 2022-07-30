import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GlobalStyle } from 'components/Common'

const NotFoundPage: FunctionComponent = function () {
  return (
    <StyledNotFoundPageWrapper>
      <GlobalStyle />
      <StyledText>404</StyledText>
      <StyledDescription>찾을 수 없는 페이지입니다.</StyledDescription>
      <StyledButton to="/">메인으로</StyledButton>
    </StyledNotFoundPageWrapper>
  )
}

const StyledNotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledText = styled.div`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const StyledDescription = styled.div`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const StyledButton = styled(Link)`
  margin-top: 30px;
  font-size: 20px;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`

export default NotFoundPage
