import Image from 'next/image';
import kids from '@/assets/kids.png';

export const AboutKids = () => {
    return (
        <div className="py-[100px] text-textColor text-center justify-between items-center  lg:flex w-[100%] ">
            <div className=" md:ml-[10%]  ">
                <Image src={kids} alt="kids" className="" />
            </div>

            <div className="">
                <h1 className="font-bold text-3xl lg:text-5xl mb-5">Create profiles for kids.</h1>
                <p className="font-medium text-xl md:text-xl">
                    Send kids on adventures with their favorite characters in a space made just for them--free with your
                    memberships
                </p>
            </div>
        </div>
    );
};
