import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../../../App";

type PostHookData = {
  post: PostType;
  isLoading: boolean;
  isReadOnly: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEdit: () => void;
  handleSave: (event: FormEvent<HTMLFormElement>) => void;
  handleDelete: () => void;
};

export const usePostHook = (): PostHookData => {
  const [post, setPost] = useState<PostType>({
    title: "",
    body: "",
    userId: 0,
    tags: [],
    reactions: 0,
  });
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      if (!response.ok) throw Error("Response failed!");
      setPost(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPost((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const handleEdit = () => setIsReadOnly((prev) => !prev);

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id) {
      try {
        const { title, body, userId, tags, reactions } = post;
        const response = await fetch(`https://dummyjson.com/posts/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            body,
            userId,
            tags,
            reactions,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw Error("Response failed!");
        setPost(data);
        setIsReadOnly(true);
        alert("Successfully edited!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) throw Error("Response failed!");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(id);
  }, [id]);

  return {
    post,
    isLoading,
    isReadOnly,
    handleChange,
    handleEdit,
    handleSave,
    handleDelete,
  };
};
