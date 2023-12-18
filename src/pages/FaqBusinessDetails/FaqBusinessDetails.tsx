import { NavBar } from "../../Components/NavBar/NavBar";
import styles from "./faqBusinessDetails.module.css";
import { FaqAccordion } from "../../Components/FaqAccordion/FaqAcordion";
import { faqArray } from "../../utils/faqArray";

export const FaqBusinessDetails = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <NavBar pageName="" />
        <div className={styles.pageHeader}>
          <h1>Business Details & FAQ</h1>
        </div>
      </div>

      <div className={styles.businessDetails}>
        <h2>business details </h2>
        <ul>
          <li>business hours</li>
          <li>location</li>
          <li>phone</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
          itaque dolores, rem totam accusantium beatae explicabo quos quod!
        </p>
      </div>
      <div className={styles.faqSection}>
        <h2>FAQ</h2>
        <div className={styles.faqQuestionWrapper}>
          {faqArray.map((faq) => (
            <FaqAccordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
