import { modalState } from '@/atoms';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { useRecoilState } from 'recoil';

const boxStyle = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  width: 800,
  height: 600,
  bgColor: 'white',
};

export const ModalUI = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box bgcolor="white" sx={boxStyle}>
        helo
      </Box>
    </Modal>
  );
};
