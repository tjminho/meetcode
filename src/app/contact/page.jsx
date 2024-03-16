import Image from "next/image"
import style from "./contact.module.css"
// import HydrationTest from "@/components/hydrationTest"
// import dynamic from "next/dynamic"

const ContactPage = () => {

    // const HydrationTestNOSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false})
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="/contact.png" alt="" fill className={style.img} />
            </div>
            <div className={style.formContainer}>
                {/* <HydrationTestNOSSR /> */}
                <form action="" className={style.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (Optional)" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage