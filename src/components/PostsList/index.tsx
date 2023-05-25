import "../../App.scss";
import { PostType } from "../../App";

type PostsListProps = {
  list: PostType[];
};

export const PostsList = ({ list }: PostsListProps) => {
  return (
    <>
      <div className="container-back">
        {list.map(({ id, title, body, userId, tags, reactions }) => (
          <div className="post" key={id}>
            <h2>{title}</h2>
            <span>{body}</span>
            <h3>{userId}</h3>
            {tags.map((tag, index) => (
              <div key={index}>
                <div className="tag">{tag}</div>
              </div>
            ))}
            <p>Reactions: {reactions}</p>
          </div>
        ))}
      </div>
    </>
  );
};
