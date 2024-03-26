import Link from "next/link"
import Links from "./links/Links"
import style from "./navber.module.css"
import { auth } from "@/lib/auth";

const Navbar = async () => {

    const session = await auth();
    console.log(session)
    return (

        <div className={style.container}>
            <Link href="/" className={style.logo}>미트코딩</Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    )
}

export default Navbar