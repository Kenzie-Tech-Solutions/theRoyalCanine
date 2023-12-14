import { NavBar } from "../../Components/NavBar/NavBar";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <NavBar />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <h1>The Royal Canine</h1>
      </div>
      <div>
        <h2>basic info</h2>
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
      <div>
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
    </div>
  );
};
