import { NavBar } from "../../Components/NavBar/NavBar";
import styles from "./faqBusinessDetails.module.css";
import { FaqAccordion } from "../../Components/faqAccordion/faqAcordion";
import { faqArray } from "../../utils/faqArray";
import { MenuModal } from "../../Components/MenuModal/menuModal";
import { useEffect, useState } from "react";
import { AnswerModal } from "../../Components/AnswerModal/AnswerModal";
import { useImgContext } from "../../providers/imgContext/imgContext";

export const FaqBusinessDetails = () => {
  const { answerModalOpen } = useImgContext();
  // Inside your component
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroSection}>
        <NavBar pageName="" />
        <div className={styles.pageHeader}>
          <h1>BUSINESS DETAILS & FAQ</h1>
        </div>
      </div>

      <div className={styles.businessDetails}>
        <h2>BUSINESS DETAILS</h2>
        <div>
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
          </p>
          <hr />
        </div>
        <div className={styles.businessInfo}>
          <div>
            <h3>BUSINESS HOURS</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
          <div>
            <h3>LOCATION</h3>
            <p>1234 Main St. Suite 100</p>
            <p>City, State 12345</p>
          </div>
          <div>
            <h3>PHONE</h3>
            <p>123-456-7890</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
          itaque dolores, rem totam accusantium beatae explicabo quos quod!
        </p>
        <hr />
        <div className={styles.faqSection}>
          <h2>FAQ</h2>
          <div className={styles.faqQuestionWrapper}>
            {windowWidth >= 1100
              ? faqArray.map((faq) => (
                  <FaqAccordion
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))
              : faqArray.map((faq) => (
                  <div
                    key={faq.id}
                    onClick={() => answerModalOpen(faq.id)}
                    className={styles.questionDivs}
                  >
                    {faq.question}
                  </div>
                ))}
          </div>
        </div>
      </div>
      <AnswerModal />
      <MenuModal pageName="" />
    </div>
  );
};
