import { createContext, useContext, useEffect, useState } from "react";
import { imageArray } from "../../utils/imageArray";
import { faqArray } from "../../utils/faqArray";

type imgArrProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

type ArrProps = {
  id: number;
  question: string;
  answer: string[];
};

type imgContext = {
  openModal: boolean;
  modalOpen: (id: number) => void;
  modalData: imgArrProps[];
  modalClose?: () => void;
  navModalOpen?: () => void;
  navModal?: boolean;
  navModalClose?: () => void;
  faqModalData?: ArrProps[];
  answerModalOpen: (id: number) => void;
  answerModal?: boolean;
  answerModalClose: () => void;
};

type imgContextProps = {
  children?: JSX.Element | JSX.Element[];
};

const imgContext = createContext({} as imgContext);

export const ImgProvider = ({ children }: imgContextProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<imgArrProps[]>([]);
  const [navModal, setNavModal] = useState(false);
  const [faqModalData, setFaqModalData] = useState<ArrProps[]>([]);
  const [answerModal, setAnswerModal] = useState(false);

  const modalOpen = (id: number) => {
    const selectedItem = imageArray.filter((item) => item.id === id);
    setModalData(selectedItem);
    setOpenModal(true);
  };

  const modalClose = () => {
    setOpenModal(false);
  };

  const navModalOpen = () => {
    setNavModal(true);
  };

  const navModalClose = () => {
    setNavModal(false);
  };

  const answerModalOpen = (id: number) => {
    const selectedItem = faqArray.filter((item) => item.id === id);
    setFaqModalData(selectedItem);
    setAnswerModal(true);
  };

  const answerModalClose = () => {
    setAnswerModal(false);
  };

  useEffect(() => {
    openModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openModal]);

  useEffect(() => {
    navModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [navModal]);

  useEffect(() => {
    answerModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [answerModal]);

  return (
    <imgContext.Provider
      value={{
        openModal,
        modalOpen,
        modalData,
        modalClose,
        navModalOpen,
        navModal,
        navModalClose,
        answerModalOpen,
        answerModalClose,
        faqModalData,
        answerModal,
      }}
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
    navModalOpen: context.navModalOpen,
    navModal: context.navModal,
    navModalClose: context.navModalClose,
    answerModalOpen: context.answerModalOpen,
    answerModal: context.answerModal,
    answerModalClose: context.answerModalClose,
    faqModalData: context.faqModalData,
  };
};
