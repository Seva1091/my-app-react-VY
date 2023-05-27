import Button from "@mui/material/Button";
import "../../App.scss";
import { usePostForm } from "./hooks/usePostForm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const PostForm = () => {
  const { post, handleChange, handleSave } = usePostForm();

  return (
    <div className="container-back">
      <div className="post">
        <h3>Add post:</h3>
        <Box onSubmit={handleSave} component="form" noValidate>
          <div className="input-area">
            <TextField
              required
              type="text"
              className="title"
              name="title"
              label="Title"
              value={post.title}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              required
              type="text"
              className="message"
              name="body"
              label="Message"
              multiline
              value={post.body}
              onChange={handleChange}
              variant="filled"
            />
            <TextField
              type="text"
              inputProps={{ maxLength: 10 }}
              className="tags"
              name="tags"
              label="Tag"
              onChange={handleChange}
              variant="filled"
            />
            <div className="container-button">
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </div>
        </Box>
        <div className="post-area">
          <h2>{post.title}</h2>
          <span>{post.body}</span>
          <br></br>
          <div className="tag">{post.tags}</div>
        </div>
      </div>
    </div>
  );
};
