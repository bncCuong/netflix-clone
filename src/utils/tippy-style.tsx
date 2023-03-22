import { ReactNode } from 'react';
import { Tippy } from '../../types';

type Props = Tippy;

export const TippyStyle = ({ children, width, borderTop = false, attrs, arrowCenter = false }: Props) => {
    return (
        <div
            {...attrs}
            tabIndex="-1"
            className={`bg-black/90 border-[1px] border-white/70 mt-2 relative w-[${width}] ${
                borderTop ? 'border-t-4' : 'border-t'
            } before:absolute  before:text-red-500 before:w-4 before:h-4 before:bg-gradient-to-b from-white to-transparent/40 before:rotate-45 ${
                arrowCenter ? 'before:-top-3 before:right-[180px]' : 'before:right-1 before:-top-2'
            }  before:-z-50`}
        >
            {children}
        </div>
    );
};
