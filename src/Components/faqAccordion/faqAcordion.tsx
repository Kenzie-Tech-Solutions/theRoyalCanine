import styles from "./faqAccordion.module.css";
import { useState } from "react";

interface Props {
  id: number;
  question: string;
  answer: string;
}

export const FaqAccordion = ({ id, question, answer }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordionWrapper} key={id}>
      <button className={styles.accordion} onClick={() => setActive(!active)}>
        {question}
      </button>
      <div className={styles.answer} style={active ? { display: "block" } : {}}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
