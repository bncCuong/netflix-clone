import Image from 'next/image';
import phone from '@/assets/mobile-0819.jpg';

export const AboutPhone = () => {
    return (
        <div className="mt-[150px] pb-[100px] text-textColor lg:flex items-center justify-evenly text-center ">
            <div className="lg:ml-0 ml-[15%] lg:mb-0 mb-10 sm:ml-0 md:ml-[10%] ">
                <Image src={phone} alt="phone" className="shrink-0" />
            </div>
            <div>
                <h1 className="lg:text-5xl text-3xl lg:py-0 py-6 font-bold ">Download your shows to watch offline.</h1>
                <p className="lg:text-2xl text-xl lg:mt-4 mt-0">
                    Save your favorites easily and always have something to watch.
                </p>
            </div>
        </div>
    );
};
