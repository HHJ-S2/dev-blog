import { MutableRefObject, useState, useEffect, useRef, useMemo } from 'react'
import { Post } from 'data'

const NUMBER_OF_ITEMS_PER_PAGE = 10

export interface useInfiniteScrollType {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: Post[]
}

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: Post[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  let observer: IntersectionObserver
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<Post[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: Post) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.disconnect()
    })

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
