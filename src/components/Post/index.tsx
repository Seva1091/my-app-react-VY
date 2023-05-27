import Button from "@mui/material/Button";
import "../../App.scss";
import { usePostHook } from "./hooks/postHook";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Post = () => {
  const {
    post,
    isLoading,
    isReadOnly,
    handleChange,
    handleEdit,
    handleSave,
    handleDelete,
  } = usePostHook();

  return post && !isLoading ? (
    <div className="container-back">
      <div className="post">
        {isReadOnly ? (
          <>
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
            <h2>{post.title}</h2>
            <span>{post.body}</span>
            <h3>{post.userId}</h3>
            <div className="container-tags">
              {post.tags.map((tag, index) => (
                <div key={index}>
                  <div className="tag">{tag}</div>
                </div>
              ))}
            </div>
            <p>Reactions: {post.reactions}</p>
          </>
        ) : (
          <>
            <h3>Edit post:</h3>
            <h2>{post.title}</h2>
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
                  <Button variant="contained" onClick={handleDelete}>
                    Delete
                  </Button>
                </div>
              </div>
            </Box>
          </>
        )}
      </div>
    </div>
  ) : (
    <>
      <h1>Nothing to show!</h1>
    </>
  );
};
