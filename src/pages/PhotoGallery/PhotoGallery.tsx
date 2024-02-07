// import { Carousel } from "react-responsive-carousel";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import { GalleryImgHolder } from "../../Components/galleryImgHolder/galleryImgHolder";
import { GalleryImgModal } from "../../galleryImgModal/galleryImgModal";
import { imageArray } from "../../utils/imageArray";
import styles from "./PhotoGallery.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { Footer } from "../../Components/Footer/Footer";
import { Carousel } from "../../Components/Carousel/Carsousel";

export const PhotoGallery = () => {
  return (
    <div className="photoGalleryWrapper">
      <NavBar pageName="" />
      <div className={styles.heroWrapper}>
        <h1>Photo Gallery</h1>
      </div>
      <hr className={styles.hr} />
      <div className={styles.carouselDiv}>
        <Carousel />
      </div>
      <hr className={styles.hr} />
      <div className={styles.galleryWrapper}>
        {imageArray.map((img) => GalleryImgHolder(img))}
      </div>
      <GalleryImgModal />
      <MenuModal pageName="" />
      <Footer />
    </div>
  );
};
