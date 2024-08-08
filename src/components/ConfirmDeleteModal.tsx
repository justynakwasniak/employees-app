import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface ConfirmDeleteModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  show,
  onHide,
  onConfirm,
}) => {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title className="text-secondary">
          {t("confirmDelete")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-secondary">
        {t("confirmDeleteMessage")}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn custom-btn mt-3"
          variant="secondary"
          onClick={onHide}
        >
          {t("no")}
        </Button>
        <Button className="btn custom-btn mt-3" onClick={onConfirm}>
          {t("yes")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;
