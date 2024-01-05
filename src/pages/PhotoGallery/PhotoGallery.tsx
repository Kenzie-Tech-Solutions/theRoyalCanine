import { Carousel } from "react-responsive-carousel";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import { GalleryImgHolder } from "../../Components/galleryImgHolder/galleryImgHolder";
import { GalleryImgModal } from "../../galleryImgModal/galleryImgModal";
import { imageArray } from "../../utils/imageArray";
import styles from "./PhotoGallery.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../Components/Footer/Footer";

export const PhotoGallery = () => {
  return (
    <div>
      <div className={styles.heroWrapper}>
        <NavBar pageName="" />
        <h1>Photo Gallery</h1>
      </div>
      <hr className={styles.hr} />
      <div className={styles.carouselDiv}>
        <Carousel
          className={styles.carousel}
          autoPlay={true}
          autoFocus={true}
          infiniteLoop={true}
          interval={4000}
          renderArrowPrev={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={styles.arrowPrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={styles.arrowNext}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )
          }
        >
          {imageArray.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={styles.carouselImg}
            />
          ))}
        </Carousel>
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
