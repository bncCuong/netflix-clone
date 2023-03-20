import Image from 'next/image';
import Banner from '@/assets/login-banner.jpg';

//COMPONENTS
import { AboutKids, AboutMacbook, AboutPhone, AboutTV, Description, Footer, Header, Question } from '@/components';
import { Line } from '@/utils';

type Props = {};

const LoginPage = (props: Props) => {
    return (
        <div className="w-full flex flex-col items-center relative">
            <div className="w-[100%] h-[700px] absolute -z-20 ">
                <Image priority src={Banner} alt="login-baner" className="object-cover w-[100%] h-[100%]" />
                <Line />
                <div className="absolute inset-0 bg-black/50 -z-49" />
            </div>
            <div className="w-[100%] bg-black h-[100%] -z-50 absolute" />
            <div className="w-[94%] xl:w-[70%] ">
                <Header />
                <Description />
                <AboutTV />
                <Line />
                <AboutPhone />
                <Line />
                <AboutMacbook />
                <Line />
                <AboutKids />
                <Line />
                <Question />
                <Line />
            </div>
            <footer className="w-[94%] xl:w-[70%] ">
                <Footer />
            </footer>
        </div>
    );
};

export default LoginPage;
