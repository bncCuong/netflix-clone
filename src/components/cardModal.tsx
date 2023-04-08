import { modalCardState } from '@/atoms';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Modal } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {};

const CardModal = (props: Props) => {
  const [showCardModal, setShowCardModal] = useRecoilState(modalCardState);

  const handleClose = () => {
    setShowCardModal(false);
  };

  return (
    <Modal open={showCardModal} onClose={handleClose}>
      <div className="absolute inset-0 bg-white/90 flex flex-col items-center pt-32 space-y-4">
        <p className="w-[270px] text-center ">
          Your card's security code (CVV) is the 3 or 4 digit number located on
          the front or back of most cards.
        </p>

        <XMarkIcon
          width={40}
          className="absolute top-10 right-10 cursor-pointer"
          onClick={handleClose}
        />
        <Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/tooltip/visa_cvv_2x.png"
          width={240}
          height={200}
          alt="card image"
        />

        <Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/tooltip/amex_cvv_2x.png"
          width={240}
          height={200}
          alt="card image"
        />
      </div>
    </Modal>
  );
};

export default CardModal;
