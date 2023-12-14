import { NavBar } from "../../Components/NavBar/NavBar";
import { imageArray } from "../../imageArray";
import styles from "./PhotoGallery.module.css";

export const PhotoGallery = () => {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <NavBar />
        <h1>Photo Gallery</h1>
      </div>
      <div className={styles.galleryWrapper}>
        {imageArray.map((img) => (
          <div key={img.id}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
