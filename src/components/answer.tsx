import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { MouseEventHandler, useEffect, useState } from 'react';

type Props = { id: string; ques: string; answer: string };

export const Answer = ({ answer, id, ques }: Props) => {
    const [showQuestion, setShowQuestion] = useState(false);

    const showQuestionHanler = () => {
        setShowQuestion((prev) => !prev);
    };

    return (
        <>
            <li
                onClick={showQuestionHanler}
                className="flex w-[100%] justify-between items-center  bg-[#2d2d2d] my-1 p-[1.4rem] hover:bg-[#4e4e4e] cursor-pointer"
            >
                <span className="text-xl sm:text-2xl">{ques}</span>
                <div className="flex ">{!showQuestion ? <PlusIcon width={48} /> : <XMarkIcon width={48} />}</div>
            </li>
            {showQuestion && (
                <div
                    className={` animate-slidedown animate-slowfade text-xl sm:text-2xl flex w-[100%] justify-between items-center  bg-[#2d2d2d] p-[1.4rem] text-start `}
                >
                    {answer}
                </div>
            )}
        </>
    );
};
