import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { modalTrailerState, movieState } from '@/atoms';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { Button, thumbnailUrl } from '@/utils';
import { Genre, Element } from '../../types';
import Tippy from '@tippyjs/react/headless';
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  HandThumbUpIcon,
  PlusCircleIcon,
  XMarkIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

import {
  PlayIcon,
  HandThumbUpIcon as Likeicon,
  StarIcon,
} from '@heroicons/react/24/solid';

export const ModalUI = () => {
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [showModal, setShowModal] = useRecoilState(modalTrailerState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [muted, setMuted] = useState<boolean>(false);
  const [addToListBtn, setAddToListBtn] = useState<boolean>(false);

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

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className=" scrollbar-hide overflow-y-auto w-[90%] h-[95%] lg:w-[80%] mt-10 pb-2 rounded-md  bg-shadow overflow-hidden bg-[#141414] relative">
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

        {/* TRAILER */}
        <div
          className="z-10 absolute w-[100%] h-[100%] -left-[0] -top-[70px] 
        sm:-top-[60px] sm:h-[120%] md:-top-[55px] md:h-[141%] 
        lg:-top-[60px] lg:h-[163%] xl:h-[175%] 2xl:h-[207%]
        "
        >
          <ReactPlayer
            url={`https://youtube.com/watch?v=${trailer}`}
            width="100%"
            height="48%"
            playing
            muted={muted}
            loop={true}
          />
        </div>

        <div
          onClick={() => setMuted((prev) => !prev)}
          className="absolute text-white/60 cursor-pointer hover:text-white
           hover:border-white 
          right-10 top-44 sm:top-72 md:top-[340px] lg:top-[400px] xl:top-[460px] 2xl:top-[540px]
           z-10 w-6 h-6 border-[1px] border-white/60 rounded-full 
           flex items-center justify-center"
        >
          {muted ? (
            <SpeakerXMarkIcon width={16} />
          ) : (
            <SpeakerWaveIcon width={16} />
          )}
        </div>

        <div
          onClick={handleClose}
          className="absolute z-20 right-4 top-10 text-white cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/50 bg-black/80 "
        >
          <XMarkIcon width={24} />
        </div>

        <div
          className="absolute left-4 top-[30%] sm:top-[40%]  md:top-[49%] 
        lg:top-[58%] xl:top-[65%] 2xl:top-[79%] z-20"
        >
          <h1 className="text-base md:text-xl lg:text-2xl text-white font-bold">
            {currentMovie?.title}
          </h1>
          <div className="  flex items-center mt-4 gap-2">
            <Button className=" w-[80px] md:w-[77px] h-[32px] lg:w-[108px] lg:h-[40px] xl:w-[118px] xl:h-[42px] hover:bg-white/90 bg-white">
              <PlayIcon className="w-[16px] md:w-[22px]" />
              <span className="text-xs md:text-sm lg:text-base">Play</span>
            </Button>

            <div onClick={() => setAddToListBtn((prev) => !prev)}>
              {addToListBtn ? (
                <Tippy
                  render={(attrs) => (
                    <div
                      {...attrs}
                      tabIndex={-1}
                      className="text-black bg-white/90 rounded-md px-2 py-1 font-semibold "
                    >
                      Add to my list
                    </div>
                  )}
                >
                  <PlusCircleIcon className="w-[28px] md:w-[32px] lg:w-[40px] text-white/70 hover:text-white cursor-pointer" />
                </Tippy>
              ) : (
                <Tippy
                  render={(attrs) => (
                    <div
                      {...attrs}
                      tabIndex={-1}
                      className="text-black bg-white/90 rounded-md px-2 py-1 font-semibold "
                    >
                      Remove from my list
                    </div>
                  )}
                >
                  <CheckBadgeIcon className="w-[28px] md:w-[32px] lg:w-[40px] text-white/70 hover:text-white cursor-pointer" />
                </Tippy>
              )}
            </div>

            <div className="w-5 h-5 md:h-6 md:w-6 border lg:h-7 lg:w-7 border-white rounded-full flex items-center justify-center">
              <HandThumbUpIcon className="w-[14px] md:w-[18px] lg:w-[22px] text-white/70 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div
          className="absolute top-[43%] text-white px-5 sm:top-[63%] md:top-[63%] 
        lg:top-[73%] xl:top-[80%] 2xl:top-[95%]"
        >
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
