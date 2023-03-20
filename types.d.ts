import React from 'react';

export type ButtonProps = {
    small?: boolean;
    medium?: boolean;
    content: string;
    width?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};
