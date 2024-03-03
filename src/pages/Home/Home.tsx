import { NavBar } from "../../Components/NavBar/NavBar";
import style from "./Home.module.css";
// import logo from "../../assets/logo.jpg";
import logo1 from "../../assets/logo1.png";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import img0 from "../../assets/image0.jpeg";
import img7 from "../../assets/image7.jpeg";
import { Footer } from "../../Components/Footer/Footer";
import { ContactBox } from "../../Components/ContactBox/ContactBox";
import { ComeVisitBox } from "../../Components/ComeVisitBox/ComeVisitBox";
import { NewsLetterBox } from "../../Components/NewsLetterBox/NewsLetterBox";
import { ElfsightWidget } from "react-elfsight-widget";
import { FormModal } from "../../Components/FormModal/FormModal";

export const Home = () => {
  return (
    <div className={style.pageBody}>
      <NavBar pageName={"home"} />
      <section className={style.headerSection}>
        <div className={style.headerContainer}>
          <div className={style.heroContainer}>
            <div className={style.heroSection}>
              <div className={style.imgContainer}>
                <img src={logo1} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.infoSection}>
        <div className={style.infoSectionContainer}>
          <ContactBox />
          <ComeVisitBox />
          <NewsLetterBox />
        </div>
      </section>
      <section id="contactInfo" className={style.contactInfoSection}>
        <div className={style.contactInfoContainer}>
          <div className={style.contactInfo}>
            <h2>Message Us</h2>
            <div>
              <form action="https://getform.io/f/paynlwwb" method="POST">
                <input name="name" type="text" placeholder="name"></input>
                <input name="email" type="email" placeholder="email"></input>
                <input name="phone" type="tel" placeholder="phone"></input>
                <textarea
                  name="message"
                  placeholder="message"
                  cols={10}
                  rows={5}
                ></textarea>
                <input
                  name="submit"
                  className={style.submitBtn}
                  type="submit"
                  value="submit"
                ></input>
              </form>
            </div>
          </div>
          <div />
        </div>
      </section>
      <section className={style.imageSection}>
        <div className={style.imageContainer1}>
          <div className={style.img0}>
            <img src={img0} alt="self service dog wash" />
          </div>
          <div className={style.img7}>
            <img src={img7} alt="img" />
          </div>
        </div>
      </section>
      <section>
        <ElfsightWidget widgetId="24db4c92-bd75-4b16-a33d-728298076354" />
      </section>
      <section className={style.footerSection}>
        <Footer />
      </section>
      <MenuModal pageName="" />
      <FormModal />
    </div>
  );
};
