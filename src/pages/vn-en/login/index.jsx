import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/login-banner.jpg';
import { Input } from '@/utils';

const Index = () => {
    return (
        <div className="w-[full] h-screen flex flex-col items-center relative">
            <Image src={banner} className=" absolute w-[100%] h-[115%] object-cover -z-40" />
            <img src="https://rb.gy/ulxxee" alt="netflix-logo" className=" w-[148px] absolute left-10 top-10" />
            <div className="w-[90%] h-[100%] mt-20 flex justify-center">
                <div className="h-[660px] w-[454px] bg-black/95 p-16 rounded-lg ">
                    <h1 className="text-textColor font-bold text-3xl">Sign In</h1>

                    <Input />
                </div>
            </div>

            <footer className="w-[100%] bg-black/70 mt-20">
                <div className="py-[20px] text-textColor/80 text-start  mx-[5%]">
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
