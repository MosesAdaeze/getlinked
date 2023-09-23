import styles from "./page.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.section__content}>
        <div>
          <img src="/logo.png" alt="omo"></img>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <span></span>
        </div>
        <div className={styles.section__menu}>
          <ul>
            <h4>Useful Links</h4>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li>
              <span></span>{" "}
              <ul>
                <li style={{ color: "rgba(212, 52, 254, 1)" }}>Follow us</li>
                <li>
                  <img></img>
                </li>
                <li>
                  <img></img>
                </li>
                <li>
                  <img></img>
                </li>
              </ul>
              <li>
                <img></img>
              </li>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul>
            <h4>Contact Us</h4>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={styles.section__bottom}>
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
}
