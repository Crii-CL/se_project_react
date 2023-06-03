import { useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

export default function LoginModal({
  onClose,
  isModalOpen,
  handleOverlayClick,
  isLoggedIn,
}) {
  return (
    <ModalWithForm openForm>
      <div></div>
    </ModalWithForm>
  );
}
