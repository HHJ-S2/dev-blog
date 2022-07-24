import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

interface Props {
  title: string
  date: string
  categories: string[]
  summary: string
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
    <StyledPostItemWrapper to={link || ''}>
      <StyledPostItemContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDate>{date}</StyledDate>
        <StyledCategory>
          {categories.map(category => (
            <StyledCategoryItem key={category}>{category}</StyledCategoryItem>
          ))}
        </StyledCategory>
        <StyledSummary>{summary}</StyledSummary>
      </StyledPostItemContent>
    </StyledPostItemWrapper>
  )
}

const StyledPostItemWrapper = styled(Link)`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    h3 {
      color: gray;
    }
  }
`

const StyledPostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const StyledDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const StyledCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const StyledCategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 6px 12px;
  border-radius: 100px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: white;
`

const StyledSummary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

export default PostItem
