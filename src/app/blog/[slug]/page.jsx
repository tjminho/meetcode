import Image from "next/image"
import styles from "./single.Post.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {

    const {slug} = params;
    const post = await getPost(slug);

    console.log(post)

    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img} />
            </div>}
            <div className={styles.textgContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src={post.img} alt="" width={50} height={50} className={styles.avatar} />

                    {/* {post && (
                        <Suspense fallback={<div>loading...</div>}>
                            <PostUser userid={post.userId} />
                        </Suspense>
                    )} */}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(0,16)}</span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    )
}

export default SinglePostPage