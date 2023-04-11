import { useState } from 'react';
import { TablePlan, Footer, Header, Loader } from '@/components';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { Button } from '@/utils';
// import Spinner from 'react-spinkit';

import payments, { loadCheckout } from '@/lib/stripe';
import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import { useAuth } from '@/hooks';

type Props = {
  products: Product[];
};

const PlanForm = ({ products }: Props) => {
  const { logout, user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[3]);
  const [isBillingLoading, setisBillingLoading] = useState<boolean>(false);

  const subscribeToPlan = () => {
    if (!user) return;
    loadCheckout(selectedPlan?.prices[0].id!);
    setisBillingLoading(true);
  };
  return (
    <main className="mx-auto max-w-5xl px-5 pb-12 transition-all md:px-10">
      <header className="flex justify-between items-center w-[90%] border-b-[1px] border-gray-400/30">
        <Header contentBtn="Sign Out" />
      </header>

      <div className="max-w-[100%] lg:max-w-[1200px]  flex justify-center ">
        <div className="w-[90%]  mt-10  ">
          <p className="text-sm">
            Step <span className="font-semibold">2</span> of{' '}
            <span className="font-semibold">3</span>
          </p>
          <h1 className="text-3xl font-bold">
            Choose the plan that's right for you
          </h1>
          <ul className="w-[400px] ">
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" />
              Watch all you want. Ad-free.
            </li>
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" /> Recommendations
              just for you.
            </li>
            <li className="flex gap-2 justify-start mt-3 ">
              <CheckIcon className="text-red-600 w-[24px]" /> Change or cancel
              your plan anytime.
            </li>
          </ul>

          <div className="flex flex-col mt-4 space-y-4">
            <div className="flex w-full items-center self-end md:w-3/5 gap-4">
              {products.map((product) => (
                <div
                  onClick={() => setSelectedPlan(product)}
                  className={`${
                    selectedPlan?.id === product.id
                      ? 'opacity-100'
                      : 'opacity-70'
                  } bg-red-600 w-[25%] h-16 sm:h-[80px] lg:h-[120px] flex items-center justify-center text-white font-semibold cursor-pointer`}
                >
                  {product.name}
                </div>
              ))}
            </div>

            <TablePlan products={products} selectedPlan={selectedPlan} />
          </div>

          <div className="mt-10 flex flex-col items-center space-y-10 pb-32">
            <p>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
              subject to your internet service and device capabilities. Not all
              content is available in all resolutions. See our Terms of Use for
              more details. Only people who live with you may use your account.
              Watch on 4 different devices at the same time with Premium, 2 with
              Standard, and 1 with Basic and Mobile.
            </p>

            <Button
              disabled={!selectedPlan || isBillingLoading}
              onClick={subscribeToPlan}
              medium={true}
              className="w-[400px] md:w-[500px]"
              textColor="white"
            >
              {isBillingLoading ? (
                <Loader color="dark:fill-gray-300" />
              ) : (
                'Next'
              )}
            </Button>
          </div>
        </div>
      </div>
      <Footer bgColor={true} />
    </main>
  );
};

export default PlanForm;

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));

  return { props: { products } };
};
