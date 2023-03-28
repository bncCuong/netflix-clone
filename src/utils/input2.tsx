import React, { useState } from 'react';

type Props = {
  placeHolder: string;
  isError: string;
  require?: boolean;
};

export const Input2 = ({ placeHolder, isError, require }: Props) => {
  const [inputForcus, setinputForcus] = useState<boolean>(false);
  return (
    <div
      className={` relative border-[1px] border-black/80 px-4 w-[450px] h-[64px] rounded-sm `}
    >
      <input
        onFocus={() => setinputForcus(true)}
        onBlur={() => setinputForcus(false)}
        className="w-[100%] h-[100%] outline-none"
      />
      <p
        className={`absolute text-base text-gray-400 top-5 ${
          inputForcus
            ? '-translate-y-[75%] text-sm animation duration-300 '
            : 'animation duration-300'
        }`}
      >
        {placeHolder}
      </p>
    </div>
  );
};
