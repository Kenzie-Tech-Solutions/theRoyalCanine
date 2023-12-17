import { NavBar } from "../../Components/NavBar/NavBar";
import { galleryImgHolder } from "../../Components/galleryImgHolder/galleryImgHolder";
import { imageArray } from "../../utils/imageArray";
import styles from "./PhotoGallery.module.css";

export const PhotoGallery = () => {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <NavBar pageName="" />
        <h1>Photo Gallery</h1>
      </div>
      <div className={styles.galleryWrapper}>
        {imageArray.map((img) => galleryImgHolder(img))}
      </div>
    </div>
  );
};
