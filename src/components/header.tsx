import { Button } from '@/utils';
import { useRouter } from 'next/router';

type Props = {};

export const Header = (props: Props) => {
    const router = useRouter();
    const btnClickHanler = () => {
        router.push('/vn-en/login');
    };
    return (
        <header className="w-[100%]  ">
            <div className="h-[86px]  flex items-center justify-between mt-5">
                <img src="https://rb.gy/ulxxee" alt="netflix-logo" className="md:w-[148px] w-[100px]" />
                <Button onClick={btnClickHanler} content="Sign In" small={true} />
            </div>
        </header>
    );
};
