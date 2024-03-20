import styles from './postUser.module.css'
import { getUser } from '@/lib/data'

const PostUser = async ({ userId }) => {


    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>{user.email}</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}


export default PostUser