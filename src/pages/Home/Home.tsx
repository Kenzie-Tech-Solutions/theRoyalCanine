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
              {/* <div className={style.titleInfo}>
              <h1>The Royal Canine</h1>
              <p>Burlington, Wisconsin</p>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className={style.infoSection}>
        {/* <div className={style.basicInformationContainer}>
          <div className={style.basicInfoSection}>
            <h2>Heading</h2>
            <div className={style.businessDetails}>
              <div>
                <h3>Hours</h3>
                <p>8 am - 8 pm</p>
                <p>7 days a week</p>
              </div>
              <div>
                <h3>Location</h3>
                <p>525 N. Pine St.</p>
                <p>Burlington, WI 53105</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eligendi enim magni nesciunt atque nam nemo natus unde ea quis,
              quae itaque dolores, rem totam accusantium beatae explicabo quos
              quod! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat eligendi enim magni nesciunt atque nam nemo natus unde ea
              quis, quae itaque dolores, rem totam accusantium beatae explicabo
              quos quod! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellat eligendi enim magni nesciunt atque nam nemo natus
              unde ea quis, quae itaque dolores, rem totam accusantium beatae
              explicabo quos quod! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat eligendi enim magni nesciunt atque nam
              nemo natus unde ea quis, quae itaque dolores, rem totam
              accusantium beatae explicabo quos quod! Lorem ipsum dolor sit amet
            </p>
          </div>
        </div> */}
        <div className={style.infoSectionContainer}>
          <ContactBox />
          <ComeVisitBox />
          <NewsLetterBox />
        </div>
      </section>
      <section id="contactInfo" className={style.contactInfoSection}>
        <div className={style.contactInfoContainer}>
          <div className={style.contactInfo}>
            <h2>CONTACT INFO</h2>
            <div>
              <form action="link-to-get-form.io">
                <input type="text" placeholder="name"></input>
                <input type="email" placeholder="email"></input>
                <input type="tel" placeholder="phone"></input>
                <textarea placeholder="message" cols={10} rows={5}></textarea>
                <input
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
    </div>
  );
};
