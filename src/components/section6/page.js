import styles from "./page.module.css";

export default function Section6() {
  return (
    <div>
          <div className={styles.Section6}>
              <div className={styles.section__text}>
            <h2>
              Prizes and <span>Rewards</span>
            </h2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        <div className={styles.section__content}>
          <div className={styles.section__imgx}>
            <img src="/trophy.png" alt="omo" />
          </div>
          <div>
            <div className={styles.section__img}>
              <img src="/medals.png" alt="omo" />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
