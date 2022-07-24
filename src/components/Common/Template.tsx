import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Template: FunctionComponent<Props> = function ({ children }) {
  return (
    <StyledContainer>
      <GlobalStyle />
      {children}
      <Footer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default Template
