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

        <div className={styles.policy_container}>
        <div className={styles.policy_content}>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose, 
            and safeguard your data when you participate in our tech 
            hackathon event. By participating in our event, you consent 
            to the practices described in this policy.
          </p>

          <div className={styles.license}>
            <h4>Licensing Policy</h4>
            <p>Here are terms of our standard License:</p>

            <div className={styles.license_list}>
            <img src="/check.png" alt="check" />
            <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
            </div>

            <div className={styles.license_list}>
            <img src="/check.png" alt="check" />
            <p>You are licensed to use the item available at any free source sites, for your project developement</p>
            </div>
            </div>
                
            <div className={styles.button}><button className={styles.readMoreButton}>Read More</button></div>
       </div>
     </div>
  </div>


      <div className={styles.section__img}>
        <img src="/padlock.png" alt="omo" />
      </div>
    </div>
  );
}
