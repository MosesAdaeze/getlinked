import styles from "./page.module.css";

export default function Section5() {
  return (
    <div className={styles.Section5}>
      <div className={styles.section__header}>
        <h1>Timeline</h1>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className={styles.section__content}>
        <div className={styles.section__row}>
          <div className={styles.section__text}>
            <h2>Hackathon Announcement</h2>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>{" "}
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No1.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__text}>
            <h2 style={{ textAlign: "start" }}>November 18, 2023</h2>
          </div>
        </div>

        <div className={styles.section__rowx}>
          <div className={styles.section__textx}>
            <h2>November 18, 2023</h2>
          </div>
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No2.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__textx}>
            <h2>Teams Registration begins</h2>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>{" "}
        </div>
        <div className={styles.section__row}>
          <div className={styles.section__text}>
            <h2>Teams Registration begins</h2>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>{" "}
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No3.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__text}>
            <h2 style={{ textAlign: "start" }}>November 18, 2023</h2>
          </div>
        </div>
        <div className={styles.section__rowx}>
          <div className={styles.section__textx}>
            <h2>November 18, 2023</h2>
          </div>
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No4.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__textx}>
            <h2>Announcement of the accepted teams and ideas</h2>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>{" "}
        </div>
        <div className={styles.section__row}>
          <div className={styles.section__text}>
            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>{" "}
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No5.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__text}>
            <h2 style={{ textAlign: "start" }}>November 18, 2023</h2>
          </div>
        </div>
        <div className={styles.section__rowx}>
          <div className={styles.section__textx}>
            <h2>November 18, 2023</h2>
          </div>
          <div className={styles.grid__inline}>
            <div>
              <img src="/Line.svg" alt="omo" />
            </div>
            <div>
              <img src="/No6.svg" alt="omo" />
            </div>
          </div>{" "}
          <div className={styles.section__textx}>
            <h2>Demo Day</h2>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
