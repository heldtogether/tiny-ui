import { Close } from "@carbon/icons-react";
import { Button } from "./Button";

type ModalContainerProps = {
  children?: React.ReactElement<typeof Modal>;
  isOpen?: boolean;
};

function ModalContainer({ children, isOpen }: ModalContainerProps) {
  return isOpen ? (
    <div className="tu:fixed tu:top-0 tu:left-0 tu:w-full tu:h-full tu:bg-black/20">
      {children}
    </div>
  ) : undefined;
}

type ModalProps = {
  children: React.ReactNode;
  title?: string;
  destructiveCancel?: boolean;
  isOpen?: boolean;
  onRequestClose?: () => void;
  onRequestSubmit?: () => void;
};

export function Modal({
  children,
  title,
  destructiveCancel = false,
  isOpen = false,
  onRequestClose,
  onRequestSubmit,
}: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      {isOpen ? (
        <div className="tu:absolute tu:min-w-96 tu:max-w-4/5 tu:min-h-96 tu:max-h-4/5 tu:top-1/2 tu:left-1/2 tu:transform tu:-translate-x-1/2 tu:-translate-y-1/2 tu:bg-white tu:rounded-xs tu:flex tu:flex-col">
          <div className="tu:flex tu:flex-row tu:justify-between">
            <div className="tu:w-full tu:flex-20">
              {title && <h2 className="tu:text-lg tu:font-bold tu:p-4">{title}</h2>}
            </div>
            <Button type="destructive" ghost={true} onClick={onRequestClose} icon={Close} iconOnly>Close</Button>
          </div>
          <div className="tu:px-4 tu:pb-4 tu:font-sans tu:flex-1">{children}</div>
          <div className="tu:flex tu:flex-row tu:justify-end">
            <Button
              type={destructiveCancel ? "destructive" : "secondary"}
              ghost={destructiveCancel}
              onClick={onRequestClose}
            >
              Close
            </Button>
            <Button type="primary" onClick={onRequestSubmit}>
              Save
            </Button>
          </div>
        </div>
      ) : undefined}
    </ModalContainer>
  );
}
