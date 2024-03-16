import styles from './postUser.module.css'
import { getUser } from '@/lib/data'

// FATCH DATA WITH AN API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };

const PostUser = async ({ userId }) => {

    // FATCH DATA WITH AN API
    // const user = await getData(userId);
    
    // FATCH DATA WITHOUT AN API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            {/* <span className={styles.title}>{user.name}</span>
            <span className={styles.username}>{user.username}</span> */}
        </div>
    )
}


export default PostUser