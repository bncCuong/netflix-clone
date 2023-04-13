import { emailLogin } from '@/atoms';
import { Button } from '@/utils';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

type FormValue = {
  email: string;
};

export const Description = () => {
  const [emailCurrent, setEmailCurrent] = useRecoilState(emailLogin);

  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<FormValue>();
  const router = useRouter();
  const submitHandler: SubmitHandler<FormValue> = (email) => {
    setEmailCurrent(email.email);
    router.push('/vn-en/login');
  };

  return (
    <div className="  mt-[210px] flex flex-col gap-6 justify-center items-center text-textColor text-center">
      <h1 className="text-3xl lg:text-5xl font-bold ">
        Unlimited movies, TV shows, and more.
      </h1>
      <p className="text-xl lg:text-2xl">Watch anywhere. Cancel anytime.</p>
      <p className="text-xl lg:text-2xl">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-[80%] md:flex md:justify-center md:gap-4 "
      >
        <div className="relative">
          <input
            placeholder="Email adress"
            type="email"
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            className=" placeholder:text-white/70 w-[380px] sm:w-[450px] sm:max-w-[500px] h-[56px] outline-none border border-1 px-3 border-gray-600/80 rounded-md bg-black/40"
          />
          {errors.email && (
            <p className="absolute text-red-500 font-semibold left-2 left-2">
              Email is required
            </p>
          )}
        </div>
        <div className=" mt-8 md:mt-0 ml-[27%] md:ml-0 ">
          <Button type="submit" medium={true}>
            Get Started
          </Button>
        </div>
      </form>
    </div>
  );
};
