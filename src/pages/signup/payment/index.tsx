import { Footer, Header } from '@/components';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const PaymentPage = (props: Props) => {
  const router = useRouter();
  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>
      <div className="w-[100%] border-t-[1px] border-gray-400/30 flex flex-col items-center pt-16 ">
        <div className="w-10 h-10 border-2 rounded-full border-red-500 flex items-center justify-center">
          <LockClosedIcon className="w-6 text-red-500" />
        </div>
        <p className="text-sm my-6">
          Step <span className="font-semibold">3</span> of{' '}
          <span className="font-semibold">3</span>
        </p>
        <h1 className="text-3xl font-bold">Choose how to play</h1>
        <p className="text-lg w-[430px] text-center py-6">
          Your payment is encrypted and you can change how you pay anytime.
        </p>
        <p className="text-lg font-semibold w-[250px] text-center">
          Secure for peace of mind. Cancel easily online.
        </p>

        <div
          onClick={() => router.push('/signup/creditoption')}
          className="w-[450px] border-[2px] border-gray-400 px-2 rounded-lg h-[60px] flex items-center cursor-pointer mt-20 mb-32"
        >
          <p className="text-sm">Credit or Debit Card</p>
          <div className="flex gap-2 ml-4 mr-24">
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png"
            />
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png"
            />
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png"
            />
          </div>
          <ChevronRightIcon width={28} />
        </div>
      </div>
      <Footer bgColor={true} />
    </main>
  );
};

export default PaymentPage;
