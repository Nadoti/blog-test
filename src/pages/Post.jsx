import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getComments } from "../services/get-comments.js"
import { getUser } from "../services/get-user.js";
import { getPosts } from "../services/get-posts.js";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CardComments } from "../components/CardComments.jsx";

export function Post() {
  const { id } = useParams();
  const [comments, setComments] = useState([])
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  
  useEffect(() => {
    async function getInfosComments() {
      const allComments = await getComments(id)
      const user = await getUser(id)
      const { response } = await getPosts(id)
      setComments(allComments)
      setPost(response.data[0])
      setUser(user)
    }
    getInfosComments()
  }, [])

  return (
    <main className="w-full">
      <div className="w-full max-w-2xl mx-auto px-2">
        <section className="flex flex-col gap-5 mb-4 pt-20">
          <Button 
            variant="outlined" 
            href="/"  
            size="small"
            sx={{ display: "block", width: "fit-content"}}
          >
            <ArrowBackIcon />
            Voltar para Home
          </Button>
          <Typography  raphy variant="h1" sx={{ fontSize: 40, fontWeight: "bold"}}>{post.title}</Typography>
        </section>

        <section className="flex items-center justify-between mb-20">
          <Typography sx={{ fontSize: 16}}>{user.name}</Typography>
          <Typography sx={{ fontSize: 16}}>{user.email}</Typography>
        </section>

        <section className="mb-20">
          <Typography sx={{ fontSize: 20}}>{post.body}</Typography>
        </section>

        <section>
          <Typography variant="h2" sx={{ fontSize: 24, fontWeight: "bold", marginBottom: 5}}>Comentários</Typography>

          <div className="flex flex-col gap-4">
            {comments?.map((comment) => (
              <CardComments key={comment.id} comment={comment}/>
            ))}

          </div>
        </section>
      </div>
    </main>
  )
}