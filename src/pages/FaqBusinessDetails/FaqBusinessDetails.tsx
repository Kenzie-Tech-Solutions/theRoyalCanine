import { NavBar } from "../../Components/NavBar/NavBar";
import styles from "./faqBusinessDetails.module.css";
import { faqArray } from "../../utils/faqArray";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { AnswerModal } from "../../Components/AnswerModal/AnswerModal";
import { useImgContext } from "../../providers/imgContext/imgContext";
import { Footer } from "../../Components/Footer/Footer";
import { aboutUs } from "../../utils/aboutUsPar";

export const FaqBusinessDetails = () => {
  const { answerModalOpen } = useImgContext();

  return (
    <div className={styles.pageWrapper}>
      <NavBar pageName="" />
      <div className={styles.heroSection}>
        <div className={styles.pageHeader}>
          <h1>BUSINESS DETAILS & FAQs</h1>
        </div>
      </div>

      <div className={styles.businessDetails}>
        <div>
          <h2>ABOUT US</h2>
          <div className={styles.aboutUsPar}>
            {aboutUs.map((par) => (
              <p key={par.p}>{par.p}</p>
            ))}
          </div>
          <hr />
        </div>
        <div className={styles.businessInfo}>
          <div>
            <h3>BUSINESS HOURS</h3>
            <p>8:00 AM - 8:00 PM / 7 days a week</p>
            <p>
              Please follow us on social media for any closures or changes to
              our hours.
            </p>
          </div>
          <div>
            <h3>LOCATION</h3>
            <p> 525 N. Pine St.</p>
            <p>Burlington, WI 53105</p>
          </div>
          <div>
            <h3>CONTACT INFORMATION</h3>
            <p>PHONE: 262.273.2961</p>
            <p>EMAIL: theroyalcanine53105@gmail.com</p>
          </div>
        </div>
        <div className={styles.howToDiv}>
          <a href="/new tab" className={styles.howToTag}>
            How to
          </a>
        </div>
        <hr />
        <div className={styles.faqSection}>
          <h2>FAQs</h2>
          <div className={styles.faqQuestionWrapper}>
            {faqArray.map((faq) => (
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

      <Footer />
    </div>
  );
};
