import { useModalStore } from "@stores/modalStore";

export const useModal = () => {
  const modalOpen = useModalStore((state) => state.openModal);
  const modalClose = useModalStore((state) => state.closeModal);

  return { modalOpen, modalClose };
};
