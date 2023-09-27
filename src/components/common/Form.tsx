import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { useState } from "react";

import { FormProps } from "interfaces/common";

import AddButton from "./AddButton";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinish,
  postImage,
  onFinishHandler,
  postVideo,
}: FormProps) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a post
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Post Title
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              variant="outlined"
              placeholder="Title.."
              inputProps={{
                style: { borderColor: "#9074b4" },
              }}
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Post Body
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write Post.."
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#919191",
                outlineColor: "#9074b4",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl
              sx={{
                flex: 1,
              }}
            >
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Select Category
              </FormHelperText>
              <Select
              variant="outlined"
              displayEmpty
              required
              multiple
              inputProps={{
                "aria-label": "Without Label",
              }}
              value={selectedCategories}
              onChange={(event) => {
                const newValue = event.target.value;
                const newValueArray = Array.isArray(newValue) ? newValue : [newValue];
                setSelectedCategories(newValueArray);
              }}
              
                >
                <MenuItem value="latest-news">ბოლო სიახლეები</MenuItem>
                <MenuItem value="publishers-posts">ბეჭდური გამოცემა</MenuItem>
                <MenuItem value="books">მაუწყებელი წიგნები</MenuItem>
                <MenuItem value="work">შრომა</MenuItem>
                <MenuItem value="science">მეცნიერება</MenuItem>
                <MenuItem value="economics">ეკონომინა</MenuItem>
                <MenuItem value="medicine">მედიცინა</MenuItem>
                <MenuItem value="city">ქალაქი</MenuItem>
                <MenuItem value="world-wide">მსოფლიო</MenuItem>
                <MenuItem value="arts">ხელოვნება</MenuItem>
                <MenuItem value="home-for-everybody">სახლი ყველას</MenuItem>
                <MenuItem value="sports">სპორტი</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography
                color="#11142d"
                fontSize={16}
                fontWeight={500}
                my="10px"
              >
                Upload Image
              </Typography>
              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "2ed480",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
          </Stack>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              YouTube Video URL
            </FormHelperText>
            <TextField
              fullWidth
              id="youtube-url"
              variant="outlined"
              placeholder="Paste YouTube video URL here.."
              inputProps={{
                style: { borderColor: "#9074b4" },
              }}
              {...register("youtubeUrl")} 
            />
          </FormControl>

          <AddButton 
          type="submit"
          title={formLoading ? 'Creating...' : 'Create'}
          backgroundColor='#9074b4'
          color="#fcfcfc"
           />
        </form>
      </Box>
    </Box>
  );
};

export default Form;
