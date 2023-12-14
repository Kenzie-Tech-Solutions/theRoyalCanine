import { NavBar } from "../../Components/NavBar/NavBar";

export const PhotoGallery = () => {
  return (
    <div>
      <NavBar />
      <h1>PhotoGallery</h1>
      <div>
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
        <img src="https://picsum.photos/id/237/200/300" alt="dog" />
      </div>
    </div>
  );
};
