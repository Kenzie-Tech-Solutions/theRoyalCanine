import { NavBar } from "../../Components/NavBar/NavBar";
import styles from "./faqBusinessDetails.module.css";
import { FaqAccordion } from "../../Components/faqAccordion/faqAcordion";
import { faqArray } from "../../utils/faqArray";

export const FaqBusinessDetails = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <NavBar pageName="" />
        <div className={styles.pageHeader}>
          <h1>BUSINESS DETAILS & FAQ</h1>
        </div>
      </div>

      <div className={styles.businessDetails}>
        <h2>BUSINESS DETAILS</h2>
        {/* change to h3 tags each in its own div then p tag */}
        {/* change fonts style and add hr  */}
        <ul>
          <li>BUSINESS HOURS</li>
          <li>LOCATION</li>
          <li>PHONE</li>
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
