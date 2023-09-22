import styles from "./page.module.css";

export default function Section7() {
  return (
    <div>
      <div className={styles.Section7}>
        <div>
          <div className={styles.section__text}>
            <h2>Partners and Sponsors</h2>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>
        <div>
          <div className={styles.section__img}>
            <img src="/sponsors.png" alt="omo" />
          </div>
        </div>
      </div>
    </div>
  );
}
