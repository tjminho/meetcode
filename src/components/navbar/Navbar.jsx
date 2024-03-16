import Link from "next/link"
import Links from "./links/Links"
import style from "./navber.module.css"

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link href="/" className={style.logo}>미트코딩</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar