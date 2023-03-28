import { ChooseThePlan, Footer, Header } from '@/components';
import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {};

const PlanForm = (props: Props) => {
  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>

      <div className="w-[100%] border-t-[1px] border-gray-400/30 flex justify-center ">
        <div className="w-[90%]  mt-10  ">
          <p className="text-sm">
            Step <span className="font-semibold">2</span> of{' '}
            <span className="font-semibold">3</span>
          </p>
          <h1 className="text-3xl font-bold">
            Choose the plan that's right for you
          </h1>
          <ul className="w-[400px] ">
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" />
              Watch all you want. Ad-free.
            </li>
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" /> Recommendations
              just for you.
            </li>
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" /> Change or cancel
              your plan anytime.
            </li>
          </ul>

          <ChooseThePlan />
        </div>
      </div>
      <Footer bgColor={true} />
    </main>
  );
};

export default PlanForm;
