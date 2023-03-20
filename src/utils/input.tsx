import React from 'react';

export const Input = () => {
    return (
        <div className="w-[380px] lg:w-[400px]">
            <input
                placeholder="Email address"
                className=" placeholder:text-white/70 w-[100%] h-[56px] outline-none border border-1 px-3 border-gray-600/80 rounded-md bg-black/40"
            />
        </div>
    );
};
