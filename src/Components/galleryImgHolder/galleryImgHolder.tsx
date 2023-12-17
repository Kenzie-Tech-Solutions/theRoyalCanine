type galleryImgHolderProps = {
  id: number;
  src: string;
  alt: string;
};

export const galleryImgHolder = ({ id, src, alt }: galleryImgHolderProps) => {
  return (
    <div key={id}>
      <img src={src} alt={alt} />
    </div>
  );
};
