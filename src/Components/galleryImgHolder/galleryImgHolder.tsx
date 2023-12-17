import { useImgContext } from "../../providers/imgContext/imgContext";

type galleryImgHolderProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export const GalleryImgHolder = ({ id, src, alt }: galleryImgHolderProps) => {
  const { modalOpen } = useImgContext();
  return (
    <div key={id} onClick={() => modalOpen(id)}>
      <img src={src} alt={alt} />
    </div>
  );
};
