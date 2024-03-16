import Image from "next/image"
import styles from "./single.Post.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPosts } from "@/lib/data";

// FATCH DATA WITH AN API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };


const SinglePostPage = async ({params}) => {

    // FATCH DATA WITH AN API
    const {slug} = params;

    // const post = await getData(slug);

    const post = await getPosts(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20370945/pexels-photo-20370945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textgContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/20370945/pexels-photo-20370945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} className={styles.avatar} />}
                    {post && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId} />
                    </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post?.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage