import { createContext, useContext, useState } from "react";
import { imageArray } from "../../utils/imageArray";

type modalOpenProps = {
  name: string;
  id: string;
};

type imgArrProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

type imgContext = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  modalOpen: (value: modalOpenProps) => void;
  modalData: imgArrProps[];
};

type imgContextProps = {
  children?: JSX.Element | JSX.Element[];
};

const imgContext = createContext({} as imgContext);

export const ImgProvider = ({ children }: imgContextProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<imgArrProps[]>([]);

  const modalOpen = ({ name, id }: modalOpenProps) => {
    if (name === undefined) {
      const selectedItem = imageArray.filter(
        (item) => item.id === parseInt(id)
      );
      setModalData(selectedItem);
      setOpenModal(true);
    }
  };

  return (
    <imgContext.Provider
      value={{ openModal, setOpenModal, modalOpen, modalData }}
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
  };
};
