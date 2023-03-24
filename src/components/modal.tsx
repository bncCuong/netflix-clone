import { modalState, movieState } from '@/atoms';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { Button, thumbnailUrl } from '@/utils';
import {
  HandThumbUpIcon,
  PlusCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

export const ModalUI = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  console.log(currentMovie);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="w-[90%] lg:w-[65%] mt-20 rounded-md h-[100%] bg-shadow overflow-hidden bg-white relative">
        <div className="w-[100%] h-[37%] md:h-[60%] lg:h-[70%] absolute ">
          <Image
            src={`${thumbnailUrl}${
              currentMovie?.backdrop_path || currentMovie?.poster_path
            }`}
            className="object-cover"
            fill
            sizes="1000"
            alt="banner"
          />
        </div>

        <div className="absolute right-4 top-4 text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/50 bg-black/80 ">
          <XMarkIcon width={24} />
        </div>

        <div className="absolute left-10 top-[15%] md:top-[34%] lg:top-[43%]">
          <h1 className="text-xl lg:text-2xl text-white font-bold">
            {currentMovie?.title}
          </h1>

          <div className="flex items-center mt-16 gap-4">
            <Button className=" w-[65px] md:w-[77px] h-[32px] lg:w-[108px] lg:h-[40px] xl:w-[118px] xl:h-[42px] hover:bg-white/90 bg-white">
              <PlayIcon className="w-[16px] md:w-[22px]" />
              <span className="text-xs md:text-sm lg:text-base">Play</span>
            </Button>
            <PlusCircleIcon className="w-[28px] md:w-[32px] lg:w-[40px] text-white/70 hover:text-white cursor-pointer" />
            <HandThumbUpIcon className="w-[28px] md:w-[32px] lg:w-[40px] text-white/70 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </Modal>
  );
};
