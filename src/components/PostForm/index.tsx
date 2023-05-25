import "../../App.scss";
import { usePostForm } from "./hooks/usePostForm";

export const PostForm = () => {
  const { post, handleChange, handleSave } = usePostForm();

  return (
    <div className="container-back">
      <div className="post">
        <span>Add post:</span>
        <form onSubmit={handleSave}>
          <div>
            <label htmlFor="title">
              Title:
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="body">
              Message:
              <input
                type="text"
                id="body"
                name="body"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="tags">
              Tag:
              <input
                type="text"
                id="tags"
                name="tags"
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Save</button>
        </form>
        <div className="post">
          <h2>{post.title}</h2>
          <span>{post.body}</span>
          <br></br>
          <span>{post.tags}</span>
        </div>
      </div>
    </div>
  );
};
