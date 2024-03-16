import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>모각코</h2>
                <h1 className={styles.title}>모여서 각자 코딩</h1>
                <p className={styles.desc}>루틴: 소개, 50분작업, 10분 휴식 및 토크 / 4시간(주최자 재량). 누구나 어디서든 모임을 주최할 수 있습니다.</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/mogakcoding1.png" alt="" fill className={styles.img} />
            </div>
        </div>
    )
}

export default AboutPage