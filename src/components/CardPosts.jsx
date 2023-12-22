import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function CardPosts({ post }) {

  return (
    <Card key={post.id} variant="outlined" className="w-full max-w-lg rounded">
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 24}} gutterBottom>
          {post.title}
        </Typography>
        <Typography className="block text-base text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions className="ml-4 mb-4">
        <Button variant="contained" href={`/post/${post.id}`}  size="small">Explore</Button>
      </CardActions>
    </Card>
      
  )
}