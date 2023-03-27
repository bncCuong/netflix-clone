import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { modalState, movieState } from '@/atoms';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { Button, thumbnailUrl } from '@/utils';
import { Genre, Element } from '../../types';
import {
  HandThumbUpIcon,
  PlusCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import {
  PlayIcon,
  HandThumbUpIcon as Likeicon,
  StarIcon,
} from '@heroicons/react/24/solid';

export const ModalUI = () => {
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [muted, setMuted] = useState<boolean>(true);
  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${currentMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&lenguage=en-US&append_to_response=videos`,
      )
        .then((reponse) => reponse.json())
        .catch((err) => err.message);

      if (data.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer',
        );
        setTrailer(data.videos.results[index]?.key);
      }

      if (data?.genres) {
        setGenres(data?.genres);
      }
    }

    fetchMovie();
  }, [currentMovie]);
  console.log(trailer, genres);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className=" overflow-y-auto w-[90%] h-[95%] lg:w-[80%] mt-10 pb-2 rounded-md  bg-shadow overflow-hidden bg-[#141414] relative">
        <div className="w-[100%] h-[37%] md:h-[60%] lg:h-[70%] absolute ">
          <Image
            src={`${thumbnailUrl}${
              currentMovie?.backdrop_path || currentMovie?.poster_path
            }`}
            className="object-cover"
            fill
            priority
            sizes="1000"
            alt="banner"
          />
        </div>
        <div>
          <ReactPlayer
            url={`https://youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '-100px', left: 0 }}
            playing
            muted={false}
          />
        </div>

        <div
          onClick={handleClose}
          className="absolute right-4 top-4 text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/50 bg-black/80 "
        >
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

        <div className="absolute top-[40%] text-white px-10 md:top-[63%] lg:top-[73%] ">
          <p>{currentMovie?.release_date}</p>
          <div className="flex items-end gap-2 mt-2 leading-4">
            <Likeicon className="w-4 h-4 md:w-[24px] md:h-6 lg:w-[30px] lg:h-[30px] bg-red-700 text-white hover:text-white cursor-pointer rounded-sm" />
            Most Liked: {currentMovie?.vote_average}
            <StarIcon className=" w-5 h-5 text-yellow-500" />
            <p className="text-xs text-white/50 leading-3">
              ({currentMovie?.vote_count})
            </p>
          </div>
          <p className="mt-4">{currentMovie?.overview}</p>
        </div>
      </div>
    </Modal>
  );
};
