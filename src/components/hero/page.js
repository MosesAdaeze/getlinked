import Image from "next/image";
import styles from "./page.module.css";
import RegisterButton from "../register-button/button";
export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.subHeading}>
        <h2>Igniting a Revolution in HR Innovation</h2>
        <div className={styles.subHeading__img}>
          <Image
            src="/vector4.svg"
            alt="vector img"
            width={219}
            height={17}
            priority
          />
        </div>{" "}
      </div>
      <div className={styles.hero__section}>
        <div className={styles.subHeading__text}>
          <h1>
            getlinked Te
            <span>
              c
              <img src="/bolb.svg" alt="omo" />
            </span>
            h Hackathon&nbsp;
            <span>
              1.0<img src="/chain.svg" alt="omo" />
             <img src="/spark.svg" alt="omo" />
            </span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <RegisterButton />
          <p>00m 00s 00h</p>
        </div>
        <div className={styles.subHeading__HeroImg}>
          <img src="/man-glasses.png" alt="omo" />
        </div>
      </div>
    </div>
  );
}