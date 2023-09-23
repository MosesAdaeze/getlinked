import styles from "./page.module.css";

export default function ContactUs() {
  return (
    <div>
      <div className={styles.ContactUs}>
        <div className={styles.section__text}>
          <h1>
            Frequently Asked <span>Questions</span>{" "}
          </h1>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
        </div>
        <div className={styles.form}>
        <h3>Questions or need assistance?<br></br>Let us know about it!</h3>
        <form>
          <div>
            <label htmlFor="firstName"></label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Mail" />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
          </div>
          <div className={styles.submitbtn}><button type="submit">Submit</button></div>
        </form>
      </div>
      </div>
    </div>
  );
}
