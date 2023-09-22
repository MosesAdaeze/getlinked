import Image from "next/image";
import styles from "./page.module.css";

export default function Section4() {
  return (
    <div className={styles.Section4}>
      <div className={styles.section__text}>
        <h1>
          Frequently Asked <span>Questions</span>{" "}
        </h1>
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
      </div>
      <div className={styles.section__img}>
         <img src="/thinking-man.svg" alt="omo" />
      </div>
    </div>
  );
}
