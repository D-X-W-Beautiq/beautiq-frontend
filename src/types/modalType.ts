export interface ModalState {
  isOpen: boolean;
  variant: "primary" | "line";
  type: "alert" | "confirm" | "custom";
  title: string;
  comment?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
}
