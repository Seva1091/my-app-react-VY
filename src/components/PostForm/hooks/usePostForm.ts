import { ChangeEvent, FormEvent, useState } from "react";
import { PostType } from "../../../App";

type UsePostFormData = {
  post: PostType;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSave: (event: FormEvent<HTMLFormElement>) => void;
};

export const usePostForm = (): UsePostFormData => {
  const [post, setPost] = useState<PostType>({
    title: "",
    body: "",
    userId: 0,
    tags: [],
    reactions: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPost((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (post.title.length > 5) {
      try {
        const response = await fetch(`https://dummyjson.com/posts/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
        const data: PostType = await response.json();
        if (!response.ok) throw Error("No response!");
        alert(`Successfully created new post ${data.title}`);
      } catch (error) {
        console.log(error);
      }
    } else alert("Too short title!");
  };

  return {
    post,
    handleChange,
    handleSave,
  };
};
