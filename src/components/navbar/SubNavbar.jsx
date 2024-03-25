import Link from "next/link"
import SubLinks from "./sublinks/Links"
import style from "./subnavber.module.css"

const SubNavbar = () => {
    const links = Link.links;
    return (
        <div className={style.container}>
            <div>
                <SubLinks />
            </div>
        </div>
    )
}

export default SubNavbar