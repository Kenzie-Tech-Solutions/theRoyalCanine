import { useImgContext } from "../../providers/imgContext/imgContext";

type galleryImgHolderProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export const GalleryImgHolder = ({
  id,
  src,
  alt,
  title,
}: galleryImgHolderProps) => {
  const { modalOpen } = useImgContext();
  return (
    <div key={id} onClick={modalOpen(id, title)}>
      <img src={src} alt={alt} />
    </div>
  );
};
