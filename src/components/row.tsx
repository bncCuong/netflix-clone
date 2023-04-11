import {
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { Movie } from '../../types';
import Thumbnail from './thumbnail';
type Props = {
  title: string;
  movie: Movie[];
};

export const Row = ({ title, movie }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleArrow = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="relative text-textColor -top-24 ">
      {/* TITLE */}
      <div className="cursor-pointer group flex items-center w-fit  animation duration-500 ">
        <span className="hover:text-white animation duration-300 font-bold text-base md:text-2xl text-shadow-lg mr-2 mb-3 text-textColor/70">
          {title}
        </span>
        <p className="text-[#54b9c5] font-semibold text-xl md:text-2xl mb-3 opacity-0 -translate-x-16 group-hover:animate-slideright ">
          Explore All
        </p>
        <span className="text-[#42dfd2] mb-3 opacity-0 text-xl md:text-2xl -translate-x-24 group-hover:animate-slideright">
          <ChevronDoubleRightIcon width={20} />
        </span>
      </div>

      {/* LIST MOVIE */}
      <div className="w-[109%] flex items-center justify-between mb-10 group">
        {/* LEFT CHEVRON */}
        <div
          onClick={() => handleArrow('left')}
          className={`   w-14 h-[127px] absolute bottom-4 -left-[113px]  hover:bg-white/10 z-10 flex items-center justify-center rounded-tr-md rounded-br-md opacity-0 group-hover:opacity-100 animation duration-500`}
        >
          <ChevronLeftIcon className="w-[50px]  hover:scale-125 " />
        </div>

        {/* MOVIE */}
        <div
          ref={rowRef}
          className="h-[160px] flex items-center gap-3 overflow-x-scroll scroll relative -left-[113px] scrollbar-hide "
        >
          {movie?.map((item) => (
            <Thumbnail key={item.id} movie={item} />
          ))}
        </div>

        {/* RIGHT CHEVON */}
        <div
          onClick={() => handleArrow('right')}
          className=" w-14 h-[127px] absolute top-[59px] right-[70px]  hover:bg-white/10 flex items-center justify-center rounded-tl-md rounded-bl-md opacity-0 group-hover:opacity-100 animation duration-500"
        >
          <ChevronRightIcon className="w-[50px] hover:scale-125 " />
        </div>
      </div>
    </div>
  );
};
