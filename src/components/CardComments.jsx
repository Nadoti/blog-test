import { Typography, Box } from "@mui/material";

export function CardComments({ comment}) {

  return (
    <Box className="w-full border-b-2 pt-2 pb-8 px-2">
      <Typography sx={{ fontSize: 18, marginBottom: 1}}>
        {comment.name}
      </Typography>
      <Typography className="text-gray-400" sx={{ fontSize: 14, marginBottom: 4}}>
        {comment.email}
      </Typography>
      <Typography className="text-gray-600" sx={{ fontSize: 18}}>
        {comment.body}
      </Typography>
    </Box>
  )
}