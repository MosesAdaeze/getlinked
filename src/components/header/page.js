import Link from "next/link";
import DesktopMenu from "./desktop-menu/desktop";
import MobileMenu from "./mobile-menu/mobile";
import styles from "./page.module.css";
export default function Header() {
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>
            {" "}
            <h1>
              get<span>linked</span>
            </h1>
          </Link>
        </div>
        <div className={styles.menu}>
          <MobileMenu />
          <DesktopMenu />
        </div>
      </section>
    </div>
  );
}
