import PostCard from "@/components/postCard/postCard"
import style from "./blog.module.css"
import { getPosts } from "@/lib/data"

// FATCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});

//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }



const BlogPage = async () => {

    // FATCH DATA WITH AN API
    // const posts = await getData();

    // FATCH DATA WITHOUT AN API
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