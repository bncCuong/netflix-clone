import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  MagnifyingGlassIcon,
  BellAlertIcon,
  ChevronDownIcon,
  PencilSquareIcon,
  FaceSmileIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

import { PlayIcon } from '@heroicons/react/24/solid';

import avatar from '@/assets/Netflix-avatar.png';
import Tippy from '@tippyjs/react/headless';
import { Button, TippyStyle, baseUrl } from '@/utils';
import { Movie } from '../../types';
import { useAuth } from '@/hooks';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/atoms';

type Props = {
  netflixOgirinals: Movie[];
};

export const MainHeader = ({ netflixOgirinals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showInputSearch, setShowInputSearch] = useState<boolean>(true);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  const { logout } = useAuth();


  //NAVBAR STYLE HANDLE
  useEffect(() => {
    const scrollHanler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', scrollHanler);

    return () => window.removeEventListener('scroll', scrollHanler);
  }, []);

  //RANDOM MOVIE
  useEffect(() => {
    if (netflixOgirinals) {
      setMovie(
        netflixOgirinals[Math.floor(Math.random() * netflixOgirinals?.length)],
      );
    }
  }, [netflixOgirinals]);

  const logoutHanler = () => {
    logout();
  };

  return (
    <header className="relative w-[100%] h-[90vh] ">
      <div className="w-[100%] h-[100%] z-0 absolute top-0 left-0  ">
        <Image
          alt="banner"
          className="object-cover "
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          priority
        />

        <div className="absolute left-[40px] lg:left-[70px]  animation duration-500 bottom-[30%] flex gap-4 z-50 ">
          <Button
            onClick={() => {}}
            className="bg-white/80 min-w-[60px] xl:w-[130px] md:w-[100px] sm:w-[100px] md:h-[36px] h-[32px] lg:h-[44px] xl:h-[56px] hover:bg-white/70 "
            textSize="xl"
          >
            <PlayIcon className="w-[16px] md:w-[18px] lg:w-[28px] xl:w-[32px]" />{' '}
            <span className="text-xs font-bold md:text-sm lg:text-base xl:text-xl">
              Play
            </span>
          </Button>

          <Button
            onClick={() => {
              setShowModal(true);
              setCurrentMovie(movie);
            }}
            className="bg-[#59595a]/70 min-w-[80px] w-[18%] xl:w-[180px] sm:w-[120px] md:h-[36px] h-[32px] lg:h-[44px] xl:h-[56px] hover:bg-[#59595a]/50 "
            textSize="xl"
          >
            <ExclamationCircleIcon className=" text-white w-[16px] md:w-[18px] lg:w-[28px] xl:w-[32px]" />{' '}
            <span className="text-xs text-white md:text-sm lg:text-sm xl:text-xl">
              More Info
            </span>
          </Button>
        </div>
        <div className="absolute right-0  bottom-[29.5%] flex gap-4 z-0 ">
          <div className="text-white bg-white/10 hover:bg-white/20 cursor-pointer w-8 h-8 border flex items-center justify-center rounded-full">
            <ArrowPathIcon width={20} />
          </div>
          <div className="md:w-24 w-16 md:h-8 h-6 bg-[#3339]/50 text-white border-l-4 flex items-center pl-2">
            16 +
          </div>
        </div>
        <div className="relative z-20 top-[300px] w-fit text-textColor left-[40px] lg:left-[70px]  animation duration-500">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-shadow-lg">
            {movie?.title || movie?.name}
          </h1>
          <p className="w-[400px] md:w-[500px] text-sm md:text-base text-shadow-md ">
            {movie?.overview}
          </p>
        </div>
      </div>

      <div
        className={` flex items-center justify-between fixed top-0 w-[100%] px-8 lg:px-16 h-[68px] bg-gradient-to-b from-black to-transparent ${
          !isTopOfPage ? 'bg-black' : 'from-black to-transparent'
        } animation duration-500 z-50 `}
      >
        <div className="flex gap-4 items-center">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix-logo"
            className="cursor-pointer md:w-[110px] w-[90px]"
          />
          <ul className="text-textColor hidden lg:flex gap-3 text-base lg:text-sm ">
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">TV shows</Link>
            </li>
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">Movies</Link>
            </li>
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">News and Popular</Link>
            </li>
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">My List</Link>
            </li>
            <li className="hover:text-textColor/50 animation duration-300">
              <Link href="/">Browse by Language</Link>
            </li>
          </ul>

          <Tippy
            placement="auto"
            interactive
            delay={[0, 300]}
            render={(attrs) => (
              <TippyStyle
                width="400px"
                attrs={attrs}
                borderTop={true}
                arrowCenter={true}
              >
                <ul className="text-textColor gap-4 text-xl font-bold w-[100%] text-center ">
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">TV shows</Link>
                  </li>
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">Movies</Link>
                  </li>
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">News and Popular</Link>
                  </li>
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">My List</Link>
                  </li>
                  <li className="hover:bg-slate-500/20 py-5">
                    <Link href="/">Browse by Language</Link>
                  </li>
                </ul>
              </TippyStyle>
            )}
          >
            {
              <div
                className={` ${
                  showInputSearch ? 'block' : 'hidden'
                }  cursor-pointer text-textColor font-bold flex lg:hidden text-sm md:text-base relative before:absolute before:content-[''] before:top-3 before:left-0 before:bg-transparent before:w-20 before:h-10`}
              >
                Browser
                <ChevronDownIcon className="w-[18px] md:w-[24px]" />
              </div>
            }
          </Tippy>
        </div>
        <div className="text-textColor flex gap-4 cursor-pointer relative">
          {showInputSearch && (
            <MagnifyingGlassIcon
              width={24}
              onClick={() => setShowInputSearch(false)}
            />
          )}

          {!showInputSearch && (
            <div className="animate-slideleft translate-x-20  ">
              <MagnifyingGlassIcon className="absolute w-6 top-1 ml-1 " />
              <input
                onBlur={() => setShowInputSearch(true)}
                className="outline-none bg-black/50 border border-white pl-8 px-2 py-1 w-[230px] "
                placeholder="title, genres, people"
              />
            </div>
          )}

          <Tippy
            placement="top-end"
            delay={[0, 300]}
            render={(attrs) => (
              <TippyStyle width="500px" borderTop={true} attrs={attrs}>
                <div className=" hover:bg-black w-[100%] h-[150px] flex items-center justify-center text-2xl text-textColor/60">
                  No recent notifications
                </div>
              </TippyStyle>
            )}
          >
            <div className="flex items-center">
              <BellAlertIcon width={24} />
            </div>
          </Tippy>

          <Tippy
            interactive
            placement="top-end"
            delay={[0, 300]}
            render={(attrs) => (
              <TippyStyle width="300px" borderTop={false} attrs={attrs}>
                <div className="w-[100%] text-textColor z-50  ">
                  <div className="flex  items-center gap-3 py-6 px-4 border-b-[1px]  hover:underline ">
                    <Image
                      src={avatar}
                      alt="avatar"
                      width={40}
                      className="rounded-md cursor-pointer"
                    />
                    <h1 className="text-xl cursor-pointer ">Kids</h1>
                  </div>
                  <div className="py-6 px-4 border-b-[1px]  ">
                    <h1 className="text-xl hover:underline cursor-pointer ">
                      Kids
                    </h1>
                    <ul className="px-4 py-6 text-xl space-y-3 font-semibold">
                      <li className="flex gap-2 items-center hover:underline cursor-pointer">
                        <PencilSquareIcon width={30} />
                        <Link href="/">Manage Profile</Link>
                      </li>
                      <li className="flex gap-2 items-center hover:underline cursor-pointer">
                        <FaceSmileIcon width={30} />
                        <Link href="/">Transfer Profile</Link>
                      </li>
                      <li className="flex gap-2 items-center hover:underline cursor-pointer">
                        <UserIcon width={30} />
                        <Link href="/">Account</Link>
                      </li>
                      <li className="flex gap-2 items-center hover:underline cursor-pointer">
                        <QuestionMarkCircleIcon width={30} />
                        <Link href="/">Help Center</Link>
                      </li>
                    </ul>
                  </div>
                  <h1
                    onClick={logoutHanler}
                    className="py-6 text-center text-xl  hover:underline cursor-pointer w-[250px]"
                  >
                    Sign out of Netflix
                  </h1>
                </div>
              </TippyStyle>
            )}
          >
            <div className="flex gap-1 ">
              <Image src={avatar} alt="avatar" width={32} />
              <ChevronDownIcon
                width={24}
                className="xl:block hidden hover:rotate-180 animation duration-300"
              />
            </div>
          </Tippy>
        </div>
      </div>
    </header>
  );
};
