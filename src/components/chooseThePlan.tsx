import { Button } from '@/utils';
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  TvIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {};

export const ChooseThePlan = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    const boxList = document.querySelectorAll('#box');
    function changeColorHanler(this: any) {
      boxList.forEach((item) => item.classList.remove('active'));
      boxList.forEach((item) => item.classList.add('notActive'));
      this.classList.add('active');
      this.classList.remove('notActive');
    }
    boxList.forEach((item) =>
      item.addEventListener('click', changeColorHanler),
    );

    return () => {
      boxList.forEach((item) => item.classList.remove('active'));
      boxList.forEach((item) => item.classList.add('notActive'));
    };
  }, []);

  return (
    <div className="w-100% lg:px-20">
      <div className="flex justify-between gap-4 md:justify-end mt-10 ]">
        <div
          id="box"
          className={` w-[24%] sm:w-[100px] md:w-[130px] md:h-32 h-20 text-white flex items-center justify-center
            text-sm shadow-md shadow-red-500 `}
        >
          Mobie
        </div>

        <div
          id="box"
          className={`${
            'active' ? 'active' : 'bg-red-300'
          }  w-[24%] sm:w-[100px] md:w-[130px] md:h-32 h-20 text-white flex items-center justify-center
            text-sm shadow-md shadow-red-500 `}
        >
          Basic
        </div>
        <div
          id="box"
          className={`${
            'active' ? 'active' : 'bg-red-300'
          }  w-[24%] sm:w-[100px] md:w-[130px] md:h-32 h-20 text-white flex items-center justify-center
            text-sm shadow-md shadow-red-500 `}
        >
          Standard
        </div>
        <div
          id="box"
          className={`${
            'active' ? 'active' : 'bg-red-300'
          }  w-[24%] sm:w-[100px] md:w-[130px] md:h-32 h-20 text-white flex items-center justify-center
            text-sm shadow-md shadow-red-500 `}
        >
          Premium
        </div>
      </div>

      {/* MONTHLY PRICE */}
      <div className=" mt-4 text-gray-500 text-sm ">
        <p className="text-center ">Monthly Price</p>
        <ul className="flex justify-between px-4 py-3 border-b-[1px] border-gray-400/50">
          <li>
            70.000<span className="underline">đ</span>
          </li>
          <li>
            108.000<span className="underline">đ</span>
          </li>
          <li>
            220.000<span className="underline">đ</span>
          </li>
          <li>
            260.000<span className="underline">đ</span>
          </li>
        </ul>
      </div>

      {/* VIDEO QUALITY */}
      <div className="flex flex-col mt-4 text-gray-500 text-sm ">
        <p className="text-center">Video quality</p>
        <ul className="flex justify-between px-6 py-3 border-b-[1px] border-gray-400/50">
          <li>Good</li>
          <li>Good</li>
          <li>Better</li>
          <li className="pr-3">Best</li>
        </ul>
      </div>

      {/* Resolution */}
      <div className="flex flex-col mt-4 text-gray-500 text-sm ">
        <p className="text-center">Resolution</p>
        <ul className="flex justify-between px-6 py-3 border-b-[1px] border-gray-400/50">
          <li>480p</li>
          <li className="pl-2">720p</li>
          <li className="pl-3">1080p</li>
          <li className="">4K+HDR</li>
        </ul>
      </div>

      {/* Devices you can use to watch */}
      <div className="flex flex-col mt-4 text-gray-500 text-sm ">
        <p className="text-center">Devices you can use to watch</p>
        <ul className="flex justify-between md:justify-end px-4 py-3 border-b-[1px] border-gray-400/50">
          <li className="flex flex-col space-y-2">
            <p>
              <DevicePhoneMobileIcon className="w-12 pr-1" /> Phone
            </p>
            <p>
              <DeviceTabletIcon className="w-12 pr-1" /> Tablet
            </p>
          </li>
          <li className="flex flex-col space-y-2 pl-16 sm:pl-[9rem] md:pl-0">
            <p>
              <DevicePhoneMobileIcon className="w-12 pr-1" /> Phone
            </p>
            <p>
              <DeviceTabletIcon className="w-12 pr-1" /> Tablet
            </p>
            <p>
              <ComputerDesktopIcon className="w-12" />{' '}
              <span className="mr-6">Computer</span>
            </p>
            <p>
              <TvIcon className="w-12" /> <span className="ml-3">TV</span>
            </p>
          </li>

          <li className="flex flex-col space-y-2 pl-8 sm:pl-[6rem] md:pl-0 ">
            {' '}
            <p>
              <DevicePhoneMobileIcon className="w-12 pr-1" /> Phone
            </p>
            <p>
              <DeviceTabletIcon className="w-12 pr-1" /> Tablet
            </p>
            <p>
              <ComputerDesktopIcon className="w-12" />{' '}
              <span className="mr-6">Computer</span>
            </p>
            <p>
              <TvIcon className="w-12" /> <span className="ml-3">TV</span>
            </p>
          </li>
          <li className="flex flex-col space-y-2 pl-8 sm:pl-[6rem] md:pl-0">
            {' '}
            <p>
              <DevicePhoneMobileIcon className="w-12 pr-1" /> Phone
            </p>
            <p>
              <DeviceTabletIcon className="w-12 pr-1" /> Tablet
            </p>
            <p>
              <ComputerDesktopIcon className="w-12" />{' '}
              <span className="mr-6">Computer</span>
            </p>
            <p>
              <TvIcon className="w-12" /> <span className="ml-3">TV</span>
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-10 pb-32">
        <p>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our Terms of Use for more details.
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>

        <Button
          onClick={() => router.push('/signup/payment')}
          medium={true}
          className="w-[600px]"
          textColor="white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};