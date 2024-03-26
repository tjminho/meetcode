"use client"

import { useState } from "react"
import style from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
    {
        title: "모각코",
        path:"/about",
    },
    {
        title: "지식모음",
        path:"/knowledge",
        submenu:[
                   {
            title: "강좌모음",
            path: "",
        }, 
                   {
            title: "기술블로그",
            path: "",
        }, 
        ]

    },
    {
        title: "커뮤니티",
        path:"/community",
        submenu:[
                    {
            title: "스터디",
            path: "study",
        }, 
                    {
            title: "질문과답변",
            path: "qna",
        }, 
                    {
            title: "자유게시판",
            path: "freeboard",
        }, 
        ]
    },
    {
        title: "블로그",
        path:"/blog",
    },
];

const Links = ( {session} ) => {

    const [open, setOpen] = useState(false);

    const isAdmin = true;

    return (
        <div className={style.container}>
            <div className={style.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                    )))}
                    {
                        session?.user ? (
                            <>
                            {
                                session.user?.isAdmin && (
                                    <NavLink item={{title: "Admin", path: "/admin"}} />
                                    )
                                }
                                <form action={handleLogout}>
                                    <button className={style.logout}>Logout</button>
                                </form>
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