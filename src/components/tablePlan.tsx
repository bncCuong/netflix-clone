import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  TvIcon,
} from '@heroicons/react/24/outline';
import { Product } from '@stripe/firestore-stripe-payments';

type Props = {
  products: Product[];
  selectedPlan: Product | null;
};

export const TablePlan = ({ products, selectedPlan }: Props) => {

  return (
    <table>
      <tbody className="divide-y-[1px] divide-gray-600/50">
        <tr className="flex flex-wrap items-center font-medium">
          <td className="w-full pt-2 text-center text-sm font-normal text-black md:w-2/5 md:p-3.5 md:text-left md:text-base ">
            Monthy price
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-black'
              }`}
            >
              {product.stripe_metadata_Monthly}
            </td>
          ))}
        </tr>

        <tr className="flex flex-wrap items-center font-medium">
          <td className="w-full pt-2 mt-2 text-center text-sm font-normal text-black md:w-2/5 md:p-3.5 md:text-left md:text-base ">
            Video Quanlity
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-black'
              }`}
            >
              {product.stripe_metadata_Video_quantity}
            </td>
          ))}
        </tr>

        <tr className="flex flex-wrap items-center font-medium">
          <td className="w-full pt-2 mt-2 text-center text-sm font-normal text-black md:w-2/5 md:p-3.5 md:text-left md:text-base ">
            Resolution
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-black'
              }`}
            >
              {product.stripe_metadata_Resolution}
            </td>
          ))}
        </tr>

        <tr className="flex flex-wrap items-center font-medium">
          <td className="w-full pt-2 mt-2 text-center text-sm font-normal text-black md:w-2/5 md:p-3.5 md:text-left md:text-base ">
            Devices you can use to watch
          </td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-black'
              }`}
            >
              <div className="flex flex-col items-center justify-start">
                <DevicePhoneMobileIcon className="w-10" />
                {product.stripe_metadata_Use_to_watch_1}
              </div>
              <div className="flex flex-col items-center justify-start">
                <DeviceTabletIcon className="w-10" />
                {product.stripe_metadata_Use_to_watch_2}
              </div>
              <div className="flex flex-col items-center justify-start">
                {product.stripe_metadata_Use_to_watch_3 && (
                  <TvIcon className="w-10" />
                )}
                {product.stripe_metadata_Use_to_watch_3}
              </div>
              <div className="flex flex-col items-center justify-start">
                {product.stripe_metadata_Use_to_watch_4 && (
                  <ComputerDesktopIcon className="w-10" />
                )}
                {product.stripe_metadata_Use_to_watch_4}
              </div>
            </td>
          ))}
        </tr>

        {/* <tr className="flex flex-wrap items-center font-medium">
          <td className="w-full p-1 text-center text-sm font-normal text-black md:w-2/5 md:p-3.5 md:text-left md:text-base ">
            Devices you can use to watch
          </td>

          <td
            className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 ? "": ""}`}
          >
            <div className="flex flex-col mb-[128px] items-center justify-start">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
            </div>
          </td>

          <td
            className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 `}
          >
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />{' '}
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>

          <td
            className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 `}
          >
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>

          <td
            className={`w-[calc(100%/4)] p-1 text-center md:w-[calc(60%/4)] md:p-2.5 `}
          >
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>
        </tr> */}

        {/*
      

        <tr>
          <td className="w-[170px]">Devices you can use to watch</td>

          <td>
            <div className="flex flex-col mb-[128px] items-center justify-start">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
            </div>
          </td>

          <td>
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />{' '}
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>

          <td>
            <div className="flex flex-col items-center ">
              <DevicePhoneMobileIcon className="w-10" /> Phone
              <DeviceTabletIcon className="w-10" /> Tablet
              <ComputerDesktopIcon className="w-10" />
              <span className="sm:ml-1">TV</span>
              <TvIcon className="w-10" />
              <span className="">Comp</span>
            </div>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};
