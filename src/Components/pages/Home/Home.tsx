import { NavBar } from "../../NavBar/NavBar";

export const Home = () => {
  return (
    <div>
      <img src="https://picsum.photos/id/237/200/300" alt="dog" />
      <h1>The Royal Canine</h1>
      <NavBar />
      <div>
        <h2>basic info</h2>
      </div>
      <div>
        <h2>contact info</h2>
        <div>
          <form action="link-to-getform.io">
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
