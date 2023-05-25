import "../../App.scss";
import { usePostHook } from "./hooks/postHook";

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
            <button onClick={handleEdit}>Edit</button>
            <h2>{post.title}</h2>
            <span>{post.body}</span>
            <h3>{post.userId}</h3>
            {post.tags.map((tag, index) => (
              <div key={index}>
                <div className="tag">{tag}</div>
              </div>
            ))}
            <p>Reactions: {post.reactions}</p>
          </>
        ) : (
          <>
            <span>Edit post:</span>
            <h2>{post.title}</h2>
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
              <button onClick={handleDelete}>Delete</button>
            </form>
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
