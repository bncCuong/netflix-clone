import { ButtonProps } from '../../types';

type Props = ButtonProps;

export const Button = ({ small = false, medium = false, content }: Props) => {
    const classes = {
        small: 'w-[70px] h-[32px] text-normal flex items-center justify-center pb-1',
        medium: 'w-[200px] h-[56px] text-2xl flex items-center justify-center',
    };
    return (
        <button
            className={`${
                small ? classes.small : medium ? classes.medium : ''
            } bg-btnBg  rounded-md hover:bg-btnBg/90 flex justify-center items-center z-50`}
        >
            <p className="font-semibold text-textColor leading-[28px] ">{content}</p>
        </button>
    );
};
