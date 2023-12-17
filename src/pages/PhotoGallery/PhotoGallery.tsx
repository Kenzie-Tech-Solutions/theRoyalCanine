import { NavBar } from "../../Components/NavBar/NavBar";
import { GalleryImgHolder } from "../../Components/GalleryImgHolder/GalleryImgHolder";
import { GalleryImgModal } from "../../GalleryImgModal/GalleryImgModal";
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
        {imageArray.map((img) => GalleryImgHolder(img))}
      </div>
      <GalleryImgModal />
    </div>
  );
};
