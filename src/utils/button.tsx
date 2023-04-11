import { ButtonProps } from '../../types';

type Props = ButtonProps;

export const Button = ({
  width,
  small = false,
  medium = false,
  onClick,
  textColor,
  textSize,
  className,
  children,
  type,
  content,
  disabled,
}: Props) => {
  const sizeSmall = `${
    width ? width : 'w-[70px]'
  } bg-btnBg hover:bg-btnBg/90 h-[32px] text-normal flex items-center justify-center pb-1`;
  const sizeMedium = `${
    width ? width : 'w-[200px]'
  } bg-btnBg hover:bg-btnBg/90 h-[56px] text-2xl flex items-center justify-center `;

  return (
    <button
    disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${
        small ? sizeSmall : medium ? sizeMedium : ''
      } ${className} rounded-md flex justify-center min-w-[86px] md:min-w-[100px] md:min-h-[46px]  min-h-[36px] px-2 py-1 items-center z-50`}
    >
      <div
        className={`font-semibold text-${textColor} text-${textSize} leading-[28px] w-[100%] sm:gap-2 gap-1 flex justify-center items-center`}
      >
        {children || content}
      </div>
    </button>
  );
};
