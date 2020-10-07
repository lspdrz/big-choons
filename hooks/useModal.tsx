import { useContext } from "react";
import { AppContext } from "../components/AppContext";

const useModal = () => {
  const [state, setState] = useContext(AppContext);

  const openModal = (modalId: String) => {
    setState((state: any) => ({ ...state, modalId: modalId }));
  };

  const closeModal = () => {
    setState((state: any) => ({ ...state, modalId: "" }));
  };

  return {
    openModal,
    closeModal,
    modalId: state.modalId,
  };
};

export default useModal;
