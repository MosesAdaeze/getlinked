import Image from "next/image";
import styles from "./page.module.css";

export default function Section1() {
  return (
    <div className={styles.Section1}>
      <div className={styles.section__img}>
        <Image
          src="/bolbidea.svg"
          alt="bolb idea illustration"
          width={405}
          height={405}
          priority
        />
      </div>
      <div className={styles.section__text}>
        <h1>Introduction to getlinked <span>techHackathon 1.0</span> </h1>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
}
