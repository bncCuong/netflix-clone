import { ButtonProps } from '../../types';

type Props = ButtonProps;

export const Button = ({ width = '', small = false, medium = false, content, onClick }: Props) => {
    const classes = {
        small: `${width ? width : 'w-[70px]'} h-[32px] text-normal flex items-center justify-center pb-1`,
        medium: `${width ? width : 'w-[200px]'} h-[56px] text-2xl flex items-center justify-center `,
    };
    return (
        <button
            onClick={onClick}
            className={`${
                small ? classes.small : medium ? classes.medium : ''
            } bg-btnBg w-[${width}] rounded-md hover:bg-btnBg/90 flex justify-center items-center z-50`}
        >
            <p className="font-semibold text-textColor leading-[28px] ">{content}</p>
        </button>
    );
};
