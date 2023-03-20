import Image from 'next/image';
import Imac from '@/assets/ipad.png';
export const AboutMacbook = () => {
    return (
        <div className="py-[100px] text-textColor text-center lg:flex justify-between items-center  w-[100%]">
            <div>
                <h1 className="font-bold text-3xl lg:text-5xl mb-5">Watch everywhere.</h1>
                <p className="font-medium text-xl md:text-xl">
                    Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV
                </p>
            </div>

            <div className="relative  md:ml-[10%]">
                <Image src={Imac} alt="imac" />
                <video
                    loop
                    muted
                    className="absolute 2xl:w-[63%] 2xl:left-[90px] xl:w-[60%] xl:top-[37px] xl:left-[85px] lg:w-[60%] lg:top-[42px] lg:left-[97px] md:w-[400px] md:top-[50px] md:left-[110px]
                    sm:w-[60%] sm:top-[50px] sm:left-[120px] -z-10 mb:w-[62%] mb:left-[94px] mb:top-[40px] "
                    autoPlay={true}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v"
                />
            </div>
        </div>
    );
};
