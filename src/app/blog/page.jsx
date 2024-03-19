import PostCard from "@/components/postCard/postCard"
import style from "./blog.module.css"
import { getPosts } from "@/lib/data"


const BlogPage = async () => {

    const posts = await getPosts();
    
    return (
        <div className={style.container}>
            {posts.map((post)=> (
            <div className={style.post} key={post.id}>
                <PostCard post={post} />
            </div>
            ))}
        </div>
    )
}

export default BlogPage