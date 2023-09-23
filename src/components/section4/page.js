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

        <div className={styles.faq_container}>
        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">Can I work on a project I started before the hackathon?</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>

        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">What happens if I need help during the hackathon?</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>

        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">What happens if I don't have an idea for a project?</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>

        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">Can I join a team or do I have to come with one?</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>

        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">What happens after the hackathon ends</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>

        <div className={styles.faq_item}>
          <div className={styles.faq_question}><a href="#">Can I work on a project I started before the hackathon?</a>
          <img src="/add.png" alt="add" />
          </div>
          {/* <div className={styles.faq_answer}> Answer</div> */}
        </div>
      </div>

    </div>


      <div className={styles.section__img}>
         <img src="/thinking-man.svg" alt="omo" />
      </div>
    </div>
  );
}
