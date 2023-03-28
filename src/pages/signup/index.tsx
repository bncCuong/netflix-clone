import { Footer, Header } from '@/components';
import { Button } from '@/utils';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const SignUpPage = (props: Props) => {
  const router = useRouter();
  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>

      <div className="w-[100%] border-t-[1px] border-gray-400/30 flex flex-col items-center justify-center h-[90vh]">
        <div className="w-10 h-10 border-[2px] rounded-full border-red-600 flex items-center justify-center">
          <CheckIcon className="text-red-600 w-[24px]" />
        </div>
        <p className="uppercase mt-6 mb-3 text-sm">
          {' '}
          Step <span className="font-semibold">1</span> of{' '}
          <span className="font-semibold">3</span>
        </p>
        <h1 className="text-3xl font-bold">Choose your plan.</h1>
        <ul className="w-[300px] ">
          <li className="flex gap-2 justify-start mt-6 ">
            <CheckIcon className="text-red-600 w-[24px]" /> No commitments,
            cancel anytime.
          </li>
          <li className="flex gap-2 justify-start mt-6 ">
            <CheckIcon className="text-red-600 w-[24px]" /> Everything on
            Netflix for one low price.
          </li>
          <li className="flex gap-2 justify-start mt-6 ">
            <CheckIcon className="text-red-600 w-[24px]" /> No ads and no extra
            fees. Ever.
          </li>
        </ul>
        <Button
          onClick={() => router.push('/signup/planform')}
          medium={true}
          textColor="white"
          className="w-[350px] mt-10"
        >
          Next
        </Button>
      </div>

      <Footer bgColor={true} />
    </main>
  );
};

export default SignUpPage;
