import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { graphql } from 'gatsby'

interface Props {
  title: string
  description: string
}

const Introduction: FunctionComponent<Props> = function ({
  title,
  description,
}) {
  return (
    <StyledBackground>
      <StyledWrapper>
        <ProfileImage />
        <div>
          <StyledSubTitle>{title}</StyledSubTitle>
          <StyledTitle>{description}</StyledTitle>
        </div>
      </StyledWrapper>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const StyledSubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const StyledTitle = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default Introduction
