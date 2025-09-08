import Button from "@components/commons/button/Button";
import { useModal } from "@hooks/useModal";
import React from "react";

const ModalTestPage = () => {
  const { modalOpen } = useModal();

  const handleAlert = () => {
    modalOpen({
      variant: "primary",
      type: "alert",
      title: "알림",
      comment: "모달 테스트입니다.",
    });
  };

  const handleConfirm = () => {
    modalOpen({
      variant: "primary",
      type: "confirm",
      title: "알림",
      comment: "모달 테스트입니다.",
    });
  };

  return (
    <div>
      <Button size="small" onClick={handleAlert}>
        alert 테스트
      </Button>
      <Button size="small" onClick={handleConfirm}>
        confirm 테스트
      </Button>
    </div>
  );
};

export default ModalTestPage;
