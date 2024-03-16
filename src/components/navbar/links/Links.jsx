"use client"

import { useState } from "react"
import style from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image";

const links = [
    {
        title: "홈",
        path:"/",
    },
    {
        title: "모각코",
        path:"/about",
    },
    {
        title: "Contact",
        path:"/contact",
    },
    {
        title: "블로그",
        path:"/blog",
    },
];

const Links = () => {

    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;

    

    return (
        <div className={style.container}>
            <div className={style.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                    )))}{
                        session ? (
                            <>
                            {
                                isAdmin && (
                                    <NavLink item={{title: "Admin", path: "/admin"}} />
                                    )
                                }
                            <button className={style.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}} />
                        )
                    }
            </div>

            <Image className={style.menuButton} onClick={() => setOpen((prev) => !prev)} src="/menu.png" alt="" width={30} height={30} />
            {
                open && <div className={style.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    </div>
            }
        </div>
    )
}

export default Links