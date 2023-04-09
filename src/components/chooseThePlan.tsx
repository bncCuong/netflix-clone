import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Button } from '@/utils';
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  TvIcon,
} from '@heroicons/react/24/outline';

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
    <div className="w-100% ">
      <table className=" w-[100%] text-sm mt-10 text-black/70 sm:table-fixed font-semibold relative ">
        <thead className="sticky">
          <tr className=" ">
            <td className="w-[40%] hidden sm:block "></td>
            <td className="">
              <div
                id="box"
                className={`${
                  'active' ? 'active' : 'bg-red-300'
                }  flex items-center justify-center ml-2 text-white font-bold  w-24 h-16 md:w-32 md:h-28 `}
              >
                Mobie
              </div>
            </td>
            <td>
              <div
                id="box"
                className={`${
                  'active' ? 'active' : 'bg-red-300'
                } flex items-center justify-center ml-2  text-white font-bold  w-24 h-16  md:w-32 md:h-28  `}
              >
                Basic
              </div>
            </td>
            <td>
              <div
                id="box"
                className={`${
                  'active' ? 'active' : 'bg-red-300'
                } flex items-center justify-center ml-2 text-white font-bold  w-24 h-16   md:w-32 md:h-28 `}
              >
                Standard
              </div>
            </td>
            <td>
              <div
                id="box"
                className={`${
                  'active' ? 'active' : 'bg-red-300'
                } flex items-center justify-center ml-2 text-white font-bold  w-24 h-16   md:w-32 md:h-28 `}
              >
                Premium
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr className="sm:hidden">
            <td></td>
            <td className="relative">
              <p className="absolute font-medium left-[66px] text-black top-3 w-[100px]">
                Monthly price
              </p>
            </td>
          </tr>
          <tr className=" text-center sm:text-start h-20 border-b  ">
            <td className="  hidden sm:block  ">
              <p className="w-[100px] pt-7">Monthly price</p>
            </td>
            <td id="col-1" className={`sm:pl-8 md:pl-12 `}>
              70.000<span className="underline">đ</span>
            </td>
            <td id="col-2" className="sm:pl-6 md:pl-12 md:pl-12">
              108.000<span className="underline">đ</span>
            </td>
            <td id="col-3" className="sm:pl-6 md:pl-12">
              220.000<span className="underline">đ</span>
            </td>
            <td id="col-4" className="sm:pl-6 md:pl-12">
              260.000<span className="underline">đ</span>
            </td>
          </tr>

          <tr className="sm:hidden">
            <td></td>
            <td className="relative">
              <p className="absolute font-medium left-[66px] text-black top-3 w-[100px]">
                Video quanlity
              </p>
            </td>
          </tr>
          <tr className=" text-center sm:text-start  h-20 border-b ">
            <td className=" hidden sm:block pt-7 ">
              <p className="w-[100px]">Video quanlity</p>
            </td>
            <td id="col-1" className="sm:pl-10 md:pl-14">
              Good
            </td>
            <td id="col-2" className="sm:pl-10 md:pl-14">
              Good
            </td>
            <td id="col-3" className="sm:pl-10 md:pl-14">
              Better
            </td>
            <td id="col-4" className="sm:pl-10 md:pl-14">
              Best
            </td>
          </tr>

          <tr className="sm:hidden">
            <td></td>
            <td className="relative">
              <p className="absolute font-medium left-[74px] text-black top-3 w-[100px]">
                Resolution
              </p>
            </td>
          </tr>
          <tr className=" text-center sm:text-start  h-20 border-b ">
            <td className=" hidden sm:block pt-7 ">Resolution</td>
            <td id="col-1" className="sm:pl-10 md:pl-14">
              480p
            </td>
            <td id="col-2" className="sm:pl-10 md:pl-14">
              720p
            </td>
            <td id="col-3" className="sm:pl-10 md:pl-14">
              1080p
            </td>
            <td id="col-4" className="sm:pl-7 md:pl-12">
              4K+HDR
            </td>
          </tr>

          <tr className="sm:hidden">
            <td></td>
            <td className="relative">
              <p className="absolute font-medium left-[20px] text-black top-3 w-[200px]">
                Devices you can use to watch
              </p>
            </td>
          </tr>
          <tr className="h-[310px]">
            <td className=" hidden sm:block mt-10 ">
              <p className="w-[120px] md:w-[170px]">
                Devices you can use to watch
              </p>
            </td>
            <td>
              <div
                id="col-1"
                className="flex flex-col mb-[115px] items-center   justify-start sm:items-start sm:pl-9 md:pl-[52px] "
              >
                <DevicePhoneMobileIcon className="w-10" /> Phone
                <DeviceTabletIcon className="w-10" /> Tablet
              </div>
            </td>

            <td>
              <div
                id="col-2"
                className="flex flex-col items-center sm:items-start sm:pl-9 md:pl-[52px]  "
              >
                <DevicePhoneMobileIcon className="w-10" /> Phone
                <DeviceTabletIcon className="w-10" /> Tablet
                <ComputerDesktopIcon className="w-10" />{' '}
                <span className="sm:ml-3">TV</span>
                <TvIcon className="w-10" />
                <span className="">Comp</span>
              </div>
            </td>

            <td>
              <div
                id="col-3"
                className="flex flex-col items-center sm:items-start sm:pl-9 md:pl-[52px]  "
              >
                <DevicePhoneMobileIcon className="w-10" /> Phone
                <DeviceTabletIcon className="w-10" /> Tablet
                <ComputerDesktopIcon className="w-10" />
                <span className="sm:ml-3">TV</span>
                <TvIcon className="w-10" />
                <span className="">Comp</span>
              </div>
            </td>
            <td>
              <div
                id="col-4"
                className="flex flex-col items-center sm:items-start sm:pl-9 md:pl-[52px]  "
              >
                <DevicePhoneMobileIcon className="w-10" /> Phone
                <DeviceTabletIcon className="w-10" /> Tablet
                <ComputerDesktopIcon className="w-10" />
                <span className="sm:ml-3">TV</span>
                <TvIcon className="w-10" />
                <span className="">Comp</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

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
          className="w-[400px] md:w-[500px]"
          textColor="white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
