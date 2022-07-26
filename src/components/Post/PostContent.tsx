import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface Props {
  html: string
}

const PostContent: FunctionComponent<Props> = function ({ html }) {
  return (
    <section className={'container'}>
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 100px;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
    color: #2e3338;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 40px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    list-style-type: disc;
    margin-left: 20px;
    padding: 0 0 1rem;
    color: #2e3338;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 0 0 30px;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: #282c34;
    border-radius: 8px;
  }

  .language-text {
    background: #f6f8fa;
    color: #595959;
  }
`

export default PostContent
