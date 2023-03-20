import Image from 'next/image';
import TVimage from '@/assets/tv.png';
type Props = {};

export const AboutTV = (props: Props) => {
    return (
        <div className="mt-[250px] mb-[100px] w-[100%] text-textColor  md:flex md:text-start text-center justify-between items-center ">
            <div className="">
                <h1 className="font-bold text-3xl lg:text-5xl mb-5">Enjoy on your TV.</h1>
                <p className="font-medium text-xl md:text-xl">
                    Watch on Smart TVs, Playstation, Xbox, <br className="block md:hidden" /> Chormecast, Apple TV,{' '}
                    <br /> Blu-ray players, and more
                </p>
            </div>

            <div className="ml-[14%] md:ml-0 relative">
                <Image src={TVimage} alt="tivi" className="w-[500px] flex flex-shrink-0" />
                <video
                    loop
                    muted
                    className="absolute xl:w-[85%] xl:top-[54px] xl:left-[50px] lg:w-[80%] lg:top-[59px] lg:left-[50px] md:w-[80%] md:top-[50px] md:left-[50px]
                    sm:w-[73%] sm:top-[70px] sm:left-[55px] -z-10 mb:w-[80%] mb:top-[50px] mb:left-[50px] "
                    autoPlay={true}
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                />
            </div>
        </div>
    );
};
