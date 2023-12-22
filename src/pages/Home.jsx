import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { getPosts, getAllPostsBySearch } from "../services/get-posts"
import { CardPosts } from "../components/CardPosts"
import { Pagination, Stack } from "@mui/material"


export function Home() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fullPage, setFullPage] = useState(1)
  const [searchByTitle, setSearchByTitle] = useState("")

  async function getAllPosts() {
    const { response, totalCount} = await getPosts(null, currentPage)
    setPosts(response.data)
    setFullPage(Math.ceil(totalCount / 10))
  }

  async function searchPostByTitle() {
    if(searchByTitle) {
      const allPosts = await getAllPostsBySearch()
      const filterPosts = allPosts.data.filter((post) => post.title.includes(searchByTitle))
      setPosts(filterPosts)
      setFullPage(1)
      return
    }
    getAllPosts()
  }

  useEffect(() => {
    
    getAllPosts()
  }, [currentPage])

  return (
    <>
      <Header onClick={searchPostByTitle} searchByTitle={searchByTitle} setSearchByTitle={setSearchByTitle}/>
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-10 pt-32 pb-10">
        {posts.map((post) => (
          <CardPosts key={post.id} post={post}/>
        ))}
        <Stack spacing={2}>
          <Pagination 
            count={fullPage}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="secondary" 
          />
        </Stack>
      </main>
    </>
  )
}

