//Library
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
// import Spinner from 'react-spinkit';
//hooks
import { useMediaQuery, useAuth } from '@/hooks';
//Components
import banner from '@/assets/login-banner.jpg';
import { Button } from '@/utils';

type Inputs = {
  email: string;
  passWord: string;
  account: string;
};

const Index = () => {
  const [showPassWord, setShowPassWord] = useState<boolean>(false);
  const [showLearnMore, setShowLearnMore] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const mediaQuery = useMediaQuery('(max-width: 768px )');
  const router = useRouter();

  const { signIn, signUp, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, passWord }) => {
    if (login) {
      await signIn(email, passWord);
    } else {
      await signUp(email, passWord);
    }
  };

  return (
    <div className="w-[full] h-full flex flex-col items-center relative">
      {loading && (
        <div className="absolute text-5xl text-red-700">
          {/* <Spinner /> */}loading...
        </div>
      )}

      {mediaQuery ? (
        <div className="bg-black w-[100%] h-[100%] absolute -z-20 inset-0"></div>
      ) : (
        <div className="absolute inset-0 bg-black/40 ">
          <Image
            alt="banner"
            src={banner}
            className=" absolute w-[100%] h-[100%] object-cover -z-40 "
          />
        </div>
      )}
      <img
        src="https://rb.gy/ulxxee"
        alt="netflix-logo"
        className=" w-[160px] absolute left-10 top-10"
      />
      <div className="w-[90%] h-[100%] mt-20 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            mediaQuery
              ? 'h-[100%] w-[90%] pt-10'
              : 'h-[660px] w-[454px] p-16 mt-10'
          } bg-black/90  rounded-lg relative `}
        >
          <h1 className="text-textColor font-bold text-3xl">Sign In</h1>
          {errors.email && (
            <div className="bg-[#E87c03] px-4 py-2 rounded-lg mt-2">
              <p className="text-white text-sm">
                Sorry, we can't find an account with this email address. Please
                try again or{' '}
                <Link className="underline" href="/vn-en">
                  create a new account.
                </Link>
              </p>
            </div>
          )}
          <input
            defaultValue="cuongcuong201194@gmail.com"
            placeholder="Email or phone number"
            type="type"
            className={`w-[100%]  text-black placeholder:text-sm placeholder:font-medium h-12 rounded-md outline-none my-6 px-4 text-lg font-medium ${
              !errors && 'border-b-4 border-[#E87c03]'
            } `}
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />

          <div className="relative">
            <input
              defaultValue="123456"
              placeholder="Password"
              {...register('passWord', { required: true })}
              type={!showPassWord ? 'password' : 'text'}
              className={`w-[100%] text-black placeholder:text-sm placeholder:font-medium  h-12 rounded-md outline-none mt-4 mb-16 px-4 text-lg font-medium ${
                !errors && 'border-b-4 border-[#E87c03]'
              }`}
            />
            {errors.passWord && (
              <span
                className={`text-[#E87c03] absolute font-medium text-sm animate-pulse mt-2 ${
                  mediaQuery ? 'left-0 top-[60px]' : 'left-0 top-[60px] '
                } `}
              >
                Your password must contain between 4 and 60 characters.
              </span>
            )}
            <div
              onClick={() => setShowPassWord(!showPassWord)}
              className={`flex items-center cursor-pointer justify-center  text-black w-6 h-6 absolute ${
                mediaQuery
                  ? 'top-[28px] right-[20px]'
                  : 'top-[26px] right-[20px]'
              } `}
            >
              {!showPassWord ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          </div>

          <Button
            type="submit"
            onClick={() => setLogin(true)}
            className="w-[100%] bg-btnBg h-[56px] text-white text-lg"
          >
            Sign In
          </Button>
          <div className="mt-3 flex justify-between">
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gray-500 checked:bg-slate-500"
              />
              <label className="text-textColor/50 text-sm">Remember me</label>
            </div>
            <p className="text-textColor/50 text-sm">Need help?</p>
          </div>
          <div className="text-textColor/50 mt-10">
            <h1>
              New to Netflix?{' '}
              <button
                type="submit"
                onClick={() => setLogin(false)}
                className="text-textColor"
              >
                Sign up now
              </button>
            </h1>
            <div className="text-sm my-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{' '}
              {!showLearnMore ? (
                <p
                  onClick={() => setShowLearnMore(true)}
                  className="text-blue-700 cursor-pointer"
                >
                  Learn more.
                </p>
              ) : (
                <div className="text-textColor/50 mt-4 text-xs">
                  The information collected by Google reCAPTCHA is subject to
                  the Google{' '}
                  <Link
                    target="_blank"
                    className="text-blue-700 hover:underline"
                    href="https://policies.google.com/privacy"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    target="_blank"
                    className="text-blue-700 hover:underline"
                    href="https://policies.google.com/terms"
                  >
                    Terms of Service
                  </Link>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      <footer
        className={`w-[100%] bg-black/70 mt-20 z-20 ${
          mediaQuery ? 'border-t-2 border-white/50' : ''
        } `}
      >
        <div className="py-[20px] text-textColor/50 text-sm text-start  mx-[5%]">
          <Link className="text-start underline" href={'/'}>
            Questions? Contact us.
          </Link>
          <div className="flex justify-between mt-10">
            <ul className="flex-col space-y-3 text-sm">
              <li>
                <Link className="text-start underline" href={'/'}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Jobs
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Speed Test
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Ways to Watch
                </Link>
              </li>
            </ul>
            <ul className="flex-col space-y-3 text-sm">
              <li>
                <Link className="text-start underline" href={'/'}>
                  Legal Notices
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Gift Card Terms
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Help Center
                </Link>
              </li>
            </ul>
            <ul className="flex-col space-y-3 text-sm">
              <li>
                <Link className="text-start underline" href={'/'}>
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link className="text-start underline" href={'/'}>
                  Corporate Infomation
                </Link>
              </li>
            </ul>
          </div>

          <h1 className="text-textColor/80 mt-10 text-xl">Netflix Vietnam</h1>
        </div>
      </footer>
    </div>
  );
};

export default Index;
