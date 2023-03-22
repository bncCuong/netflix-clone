import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks';
import Link from 'next/link';
import banner from '@/assets/login-banner.jpg';
import { Button } from '@/utils';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';

const Index = () => {
    const [showPassWord, setShowPassWord] = useState(false);
    const mediaQuery = useMediaQuery('(max-width: 768px )');
    const router = useRouter();
    return (
        <div className="w-[full] h-full flex flex-col items-center relative">
            {mediaQuery ? (
                <div className="bg-black w-[100%] h-[100%] absolute -z-20 inset-0"></div>
            ) : (
                <Image alt="banner" src={banner} className=" absolute w-[100%] h-[100%] object-cover -z-40" />
            )}
            <img src="https://rb.gy/ulxxee" alt="netflix-logo" className=" w-[160px] absolute left-10 top-10" />
            <div className="w-[90%] h-[100%] mt-20 flex justify-center">
                <div
                    className={`${
                        mediaQuery ? 'h-[100%] w-[90%] pt-10' : 'h-[660px] w-[454px] p-16 mt-10'
                    } bg-black/90  rounded-lg relative `}
                >
                    <h1 className="text-textColor font-bold text-3xl">Sign In</h1>
                    <input className="w-[100%] h-12 rounded-md outline-none mt-8 px-4 text-lg font-medium" />
                    <input
                        type={showPassWord ? 'password' : 'text'}
                        className="w-[100%] h-12 rounded-md outline-none mt-4 mb-10 px-4 text-lg font-medium"
                    />

                    <div
                        onClick={() => setShowPassWord(!showPassWord)}
                        className={`flex items-center cursor-pointer justify-center  text-black w-6 h-6 absolute ${
                            mediaQuery ? 'top-[184px] right-[20px]' : 'top-[207px] right-[80px]'
                        } `}
                    >
                        {showPassWord ? <EyeSlashIcon /> : <EyeIcon />}
                    </div>

                    <Button medium={true}  onClick={() => router.push('/vn-en')}>
                        Sign In
                    </Button>
                    <div className="mt-3 flex justify-between">
                        <div className="flex items-center gap-2 ">
                            <input type="checkbox" className="w-4 h-4 bg-gray-500 checked:bg-slate-500" />
                            <label className="text-textColor/50 text-sm">Remember me</label>
                        </div>
                        <p className="text-textColor/50 text-sm">Need help?</p>
                    </div>
                    <div className="text-textColor/50 mt-20">
                        <h1>
                            New to Netflix? <span className="text-textColor">Sign in now</span>
                        </h1>
                        <p className="text-sm my-4">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                            <Link href="/" className="text-blue-700">
                                Learn more.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <footer className={`w-[100%] bg-black/70 mt-20 ${mediaQuery ? 'border-t-2 border-white/50' : ''} `}>
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
