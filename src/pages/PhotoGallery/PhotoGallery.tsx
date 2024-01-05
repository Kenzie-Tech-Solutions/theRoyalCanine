import { Carousel } from "react-responsive-carousel";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import { GalleryImgHolder } from "../../Components/galleryImgHolder/galleryImgHolder";
import { GalleryImgModal } from "../../galleryImgModal/galleryImgModal";
import { imageArray } from "../../utils/imageArray";
import styles from "./PhotoGallery.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const PhotoGallery = () => {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <NavBar pageName="" />
        <h1>Photo Gallery</h1>
      </div>
      <div>
        <Carousel className={styles.carousel}>
          {imageArray.map((img, index) => (
            <div key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.galleryWrapper}>
        {imageArray.map((img) => GalleryImgHolder(img))}
      </div>
      <GalleryImgModal />
      <MenuModal pageName="" />
    </div>
  );
};
