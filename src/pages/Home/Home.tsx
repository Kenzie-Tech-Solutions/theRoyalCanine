import { NavBar } from "../../Components/NavBar/NavBar";
import style from "./Home.module.css";
import logo from "../../assets/logo.jpg";
import { MenuModal } from "../../Components/MenuModal/menuModal";

export const Home = () => {
  return (
    <div className={style.pageBody}>
      <section className={style.headerSection}>
        <div className={style.heroContainer}>
          <div className={style.heroSection}>
            <NavBar pageName={"home"} />
            <div className={style.imgContainer}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style.titleInfo}>
              <h1>The Royal Canine</h1>
              <p>Burlington, Wisconsin</p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.infoSection}>
        <div className={style.basicInformationContainer}>
          <div className={style.basicInfoSection}>
            <h2>Heading</h2>
            <div>
              <h3>Business Hours</h3>
              <h3>Location</h3>
              {/* <ul>
                <li>business hours</li>
                <li>location</li>
              </ul> */}
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
        </div>
      </section>
      <section className={style.backgroundImage}></section>
      <section className={style.contactInfoSection}>
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
      <MenuModal pageName="" />
    </div>
  );
};
