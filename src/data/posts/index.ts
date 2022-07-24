export interface PostFrontmatter {
  title: string
  summary?: string
  date: string
  categories: string[]
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
