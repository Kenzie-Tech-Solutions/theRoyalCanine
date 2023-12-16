import { NavBar } from "../../Components/NavBar/NavBar";
import style from "./Home.module.css";
import logo from "../../assets/logo.jpg";

export const Home = () => {
  return (
    <div className={style.pageBody}>
      <div className={style.heroContainer}>
        <div className={style.heroSection}>
          <NavBar />
        </div>
        <div className={style.imgContainer}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={style.basicInformationContainer}>
        <div className={style.basicInfoSection}>
          <h2>Heading</h2>
          <ul>
            <li>business hours</li>
            <li>location</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className={style.contactInfoContainer}>
        <div className={style.contactInfo}>
          <h2>contact info</h2>
          <div>
            <form action="link-to-get-form.io">
              <input type="text" placeholder="name"></input>
              <input type="email" placeholder="email"></input>
              <input type="tel" placeholder="phone"></input>
              <input type="submit" value="submit"></input>
            </form>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
