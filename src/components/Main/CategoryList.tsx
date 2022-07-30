import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface Props {
  selectedCategory: string
  categoryList: { [key: string]: number }
}

interface GatsbyLinkProps {
  children: ReactNode
  className?: string
  to: string
  active: boolean
}

const CategoryList: FunctionComponent<Props> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <StyledCategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <StyledCategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          <>
            #{name}({count})
          </>
        </StyledCategoryItem>
      ))}
    </StyledCategoryListWrapper>
  )
}

const StyledCategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
const StyledCategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<{ active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

export default CategoryList
