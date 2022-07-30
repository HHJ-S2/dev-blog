export interface PostFrontmatter {
  title: string
  date: string
  categories: string[]
  summary: string
}

export interface Post {
  node: {
    id: string
    fields?: {
      slug: string
    }
    frontmatter: PostFrontmatter
  }
}
