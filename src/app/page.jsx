import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>함께 모여 코딩하고 성장하는 (인천)미트코딩(meetCoding)입니다📱</h1>
      <p className={styles.desc}>
      서로 잘 몰라도 IT와 코딩이라는 매개체로 자유롭게 소통하며 현직, 프리, 강사, 학생, 취준생 간에 벽을 허물고 누구든 편하게 스터디, 모각코 프로젝트팀을 모집하고 참여해 보세요!
      또한 매일 아침 최신 IT 정보를 톡방 하나로 확인하세요.
      코딩을 막 시작하거나 입문하시는 분들도 부담 갖지 마시고 들어오세요!
      현직분들도 환영합니다!!!!
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;