import React, { ReactNode } from 'react';

export type ButtonProps = {
    small?: boolean;
    medium?: boolean;
    width?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    textColor?: string;

    textSize?: string;
    children?: ReactNode;
    className?: string;
};

export type Tippy = {
    children: ReactNode;
    width: string;
    borderTop?: boolean;
    attrs: any;
    arrowCenter?: boolean;
};
