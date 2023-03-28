import { Header } from '@/components';
import { Input2 } from '@/utils';
import React from 'react';

type Props = {};

const CreditOption = (props: Props) => {
  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>
      <div className="w-[100%] border-t-[1px] border-gray-400/30 flex flex-col items-center pt-16 ">
        <Input2 placeHolder="First name" />
      </div>
    </main>
  );
};

export default CreditOption;
