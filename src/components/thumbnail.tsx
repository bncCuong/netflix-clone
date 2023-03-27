import { thumbnailUrl } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Movie } from '../../types';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/atoms';

type Props = {
  movie: Movie;
};

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div className="min-w-[200px] h-32 relative">
      {
        <Image
          src={`${thumbnailUrl}${movie.backdrop_path || movie.poster_path}`}
          alt="thumbnail"
          fill
          priority
          className="w-[200px] h-[100%] absolute cursor-pointer rounded-sm hover:scale-105 animate duration-300 hover:scale-105 animate duration-300 "
          sizes="100"
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}
        />
      }
    </div>
  );
};

export default Thumbnail;
