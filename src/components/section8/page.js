import styles from "./page.module.css";

export default function Section8() {
  return (
    <div className={styles.Section8}>
      <div className={styles.section__text}>
        <h1>
          Privacy Policy and <span>Terms</span>{" "}
        </h1>
        <p>Last updated on September 12,2023</p>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. its
          our aim to always take of our participant
        </p>
      </div>
      <div className={styles.section__img}>
        <img src="/padlock.png" alt="omo" />
      </div>
    </div>
  );
}
