import { Footer, Header } from '@/components';
import { useMediaQuery } from '@/hooks';
import { Button } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const LogoutPage = () => {
  const MediaQuery = useMediaQuery('(max-width: 768px )');
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/vn-en/login');
    }, 30000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center h-full ">
      <div className="w-full z-10 px-20 ">
        <Header />
      </div>

      {!MediaQuery && (
        <Image
          src="https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg"
          alt="bg"
          fill
          className="object-cover z-0 "
        />
      )}

      <div className="w-[440px] h-[370px] bg-white z-10 text-black mt-[130px] px-12 py-8 flex flex-col ">
        <h1 className="text-4xl font-bold">Leaving so soon ?</h1>
        <p className="mt-6">
          Just so you know, you don’t always need to sign out of Netflix. It’s
          only necessary if you’re on a shared or public computer.
        </p>
        <p className="mt-6">
          You’ll be redirected to Netflix.com in 30 seconds.
        </p>

        <Button
          onClick={() => router.push('/vn-en/login')}
          textColor="white"
          className="w-full py-3 bg-[#017af2] mt-10"
        >
          Go now
        </Button>
      </div>
      <div className="w-full ">
        <Footer
          className={`${
            !MediaQuery ? 'bg-black text-white/70  ' : 'text-black'
          } mt-[19rem] px-10 md:px-40 `}
        />
      </div>
    </div>
  );
};

export default LogoutPage;
