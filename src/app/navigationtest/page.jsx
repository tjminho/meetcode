"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchparams = useSearchParams();

    const q = searchparams.get("q");

    console.log(pathname);
    console.log(q);

    const handleClick = () => {
        console.log("clicked");
        router.refresh("/");
    }
    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage