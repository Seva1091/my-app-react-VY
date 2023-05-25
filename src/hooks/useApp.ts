import { useEffect, useState } from "react";
import { PostType } from "../App";

type UseAppData = {
    posts: PostType[];
}

export const useApp = ():UseAppData => {
    const [posts, setPosts] = useState<PostType[]>([])

    const fetchPosts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/posts`)
            const {posts} = await response.json();
            if(!response.ok) throw Error('No response!')
            setPosts(posts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return {
        posts,
    }

}