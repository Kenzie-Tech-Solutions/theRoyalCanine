import { createContext, useContext, useEffect, useState } from "react";
import { imageArray } from "../../utils/imageArray";

type imgArrProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

type imgContext = {
  openModal: boolean;
  modalOpen: (id: number) => void;
  modalData: imgArrProps[];
  modalClose?: () => void;
};

type imgContextProps = {
  children?: JSX.Element | JSX.Element[];
};

const imgContext = createContext({} as imgContext);

export const ImgProvider = ({ children }: imgContextProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<imgArrProps[]>([]);

  const modalOpen = (id: number) => {
    const selectedItem = imageArray.filter((item) => item.id === id);
    setModalData(selectedItem);
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <imgContext.Provider
      value={{ openModal, modalOpen, modalData, modalClose }}
    >
      {children}
    </imgContext.Provider>
  );
};

export const useImgContext = () => {
  const context = useContext(imgContext);
  return {
    modalOpen: context.modalOpen,
    openModal: context.openModal,
    modalData: context.modalData,
    modalClose: context.modalClose,
  };
};
