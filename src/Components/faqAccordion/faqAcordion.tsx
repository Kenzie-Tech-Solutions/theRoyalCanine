import styles from "./faqAccordion.module.css";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export const FaqAccordion = ({ question, answer }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordionWrapper}>
      <button className={styles.accordion} onClick={() => setActive(!active)}>
        {question}
      </button>
      <div className={styles.answer} style={active ? { display: "block" } : {}}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
