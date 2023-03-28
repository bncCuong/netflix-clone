import { Button } from '@/utils';
import { useRouter } from 'next/router';

type Props = {};

export const Header = (props: Props) => {
  const router = useRouter();
  const btnClickHanler = () => {
    router.push('/vn-en/login');
  };
  const logoClickHanler = () => {
    router.push('/');
  };
  return (
    <header className="w-[100%]  ">
      <div className="h-[86px]  flex items-center justify-between mt-5">
        <img
          onClick={logoClickHanler}
          src="https://rb.gy/ulxxee"
          alt="netflix-logo"
          className="md:w-[148px] w-[100px] cursor-pointer"
        />
        <Button onClick={btnClickHanler} small={true} textColor="white">
          Sign In
        </Button>
      </div>
    </header>
  );
};
