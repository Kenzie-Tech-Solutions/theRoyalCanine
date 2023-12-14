import { NavBar } from "../../Components/NavBar/NavBar";
import style from "./faqBusinessDetails.module.css";

export const FaqBusinessDetails = () => {
  return (
    <div>
      <div className={style.heroSection}>
        <NavBar />
        <h1>Business Details & FAQ</h1>
      </div>

      <div className="business-details">
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
      <div className="faq-section">
        <h2>FAQ</h2>
        <div>
          <h3>question 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
          </p>
        </div>
        <div>
          <h3>question 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
          </p>
        </div>
        <div>
          <h3>question 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eligendi enim magni nesciunt atque nam nemo natus unde ea quis, quae
            itaque dolores, rem totam accusantium beatae explicabo quos quod!
          </p>
        </div>
      </div>
    </div>
  );
};
