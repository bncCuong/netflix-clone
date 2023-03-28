import { Button, Input } from '@/utils';
import { useRouter } from 'next/router';

export const Description = () => {
  const router = useRouter();
  const btnClickHanler = () => {
    router.push('/signup');
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
      <div className=" sm:flex gap-2 items-center justify-center ">
        <Input enteredValue="" />
        <div
          onClick={btnClickHanler}
          className="mt-2 sm:mt-0 ml-[27%] sm:ml-0 "
        >
          <Button medium={true}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};
