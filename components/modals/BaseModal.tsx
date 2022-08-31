import React from 'react';
import Modal from 'react-modal';

type Props = {
  setExit: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  exit: boolean;
};

Modal.setAppElement('#__next');

const customStyles = {
  content: {
    backgroundColor: '#000000cc',
    border: 'none',
    width: 'auto',
    outline: 'none',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '100',
    backgroundColor: '#000000cc',
    border: 'none',
    overflow: 'scroll',
    overflowX: 'hidden',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const BaseModal: React.FC<Props> = ({ children, setExit, exit }) => {

  function closeModal() {
    setExit(false);
  }

  return (
    <Modal
      isOpen={exit}
      onRequestClose={closeModal}
      // @ts-ignore
      style={customStyles}
      className='modal'
    >
      {children}
      <style jsx>
        {`
          .articles{
            scrollbar-width: none;
          }
          .articles::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </Modal>
  );
};

export default BaseModal;