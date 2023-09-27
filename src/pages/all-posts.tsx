import Add from "@mui/icons-material/Add";
import { useTable } from "@refinedev/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { AddButton } from "components";

const AllPosts = () => {

    const navigate = useNavigate()


  return (
   <Box>
    <Stack direction='row'
    justifyContent='space-between'
    alignItems='center'
    >
      <Typography fontSize={25} fontWeight={700} color='#11142d'>
        All Posts
      </Typography>
      <AddButton 
      title='Add Post'
      handleClick={() => navigate('/posts/create')}
      backgroundColor='#9074b4'
      color='#fcfcfc'
      icon={<Add />}
      />


    </Stack>
   </Box>
  )
}

export default AllPosts;