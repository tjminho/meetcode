"use client";

import Link from 'next/link';
import styles from './subnavlink.module.css';
import { usePathname } from 'next/navigation';

const SubNavLink = ( { item }) => {

    const pathName = usePathname();

    console.log(pathName);
    return (
        <>
        </>
    )
}

export default SubNavLink