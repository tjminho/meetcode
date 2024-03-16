import styles from "./footer.module.css"


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>미트코딩</div>
            <div className={styles.text}>
            인천 IT 모각코 정처기 스터디 국비 개발자 코딩 AI - 커뮤니티
            </div>
        </div>
    )
}

export default Footer