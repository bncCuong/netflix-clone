import React, { useState } from 'react';

type Props = {
  placeHolder: string;
  isError: any;
  require?: boolean;
  registee: any;
  name: string;
};

export const Input2 = ({
  placeHolder,
  isError,
  require,
  registee,
  name,
}: Props) => {
  const [inputForcus, setinputForcus] = useState<boolean>(false);
  return (
    <div
      className={`${
        isError ? 'border-red-500' : 'border-black/80'
      } relative border-[1px] mb-8  px-4 max-w-[450px] w-[90%] h-[64px] rounded-sm `}
    >
      <input
        onFocus={() => setinputForcus(true)}
        className="w-[100%] h-[100%] outline-none"
        {...registee(name, { required: require, minLength: 4 })}
      />
      {isError && (
        <p className="-ml-4 text-xs mt-1 text-red-600">
          Please enter a {placeHolder}{' '}
        </p>
      )}

      <p
        className={`absolute text-base text-gray-400 top-5 ${
          inputForcus
            ? '-translate-y-[150%] px-2 bg-white text-sm animation duration-300 '
            : 'animation duration-300'
        }`}
      >
        {placeHolder}
      </p>
    </div>
  );
};
