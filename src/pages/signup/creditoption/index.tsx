import { modalCardState } from '@/atoms';
import { Footer, Header } from '@/components';
import CardModal from '@/components/cardModal';
import { Button, Input2 } from '@/utils';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { log } from 'console';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';

type FormValue = {
  firstName: string;
  lastName: string;
  cardNumber: number;
  expirationDate: number;
  securityCode: number;
  checkbox: string;
};

const CreditOption = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHanler: SubmitHandler<FormValue> = (data) => {};
  const [showCardModal, setShowCardModal] = useRecoilState(modalCardState);
  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>

      <div className="w-[100%] border-t-[1px] border-gray-400/30 flex flex-col items-center  pt-10 ">
        <p className="text-base ">Last Step!!</p>
        <h1 className="text-2xl font-bold">Set up your credit or debit card</h1>
      </div>

      <div className="w-[100%] py-10 ">
        <form
          onSubmit={handleSubmit(onSubmitHanler)}
          className="w-[100%] flex items-center flex-col"
        >
          <div className="flex gap-2 mb-2 mr-[310px] ">
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA@2x.png"
            />
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD@2x.png"
            />
            <img
              alt="card"
              width={42}
              src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX@2x.png"
            />
          </div>
          <Input2
            placeHolder="First name"
            require={true}
            isError={errors.firstName}
            registee={register}
            name="firstName"
          />
          <Input2
            placeHolder="Last name"
            require={false}
            isError={errors.lastName}
            registee={register}
            name="lastName"
          />
          <Input2
            placeHolder="Card number"
            require={true}
            isError={errors.cardNumber}
            registee={register}
            name="cardNumber"
          />
          <Input2
            placeHolder="Exporation date(MM/YY)"
            require={true}
            isError={errors.expirationDate}
            registee={register}
            name="expirationDate"
          />
          <div className="w-[100%] flex justify-center relative">
            <Input2
              placeHolder="Security Code(CCV)"
              require={true}
              isError={errors.securityCode}
              registee={register}
              name="securityCode"
            />
            <p
              className="absolute top-5 ml-96 cursor-pointer text-[#8c8c8c]"
              onClick={() => setShowCardModal(true)}
            >
              <QuestionMarkCircleIcon width={24} />
            </p>
          </div>

          <div className="flex justify-between w-[450px] p-4 bg-[#f4f4f4] rounded-lg">
            <div className="flex flex-col">
              <p className="font-semibold">
                260,000<span className="underline">đ</span>/month
              </p>
              <p className="text-[#737373]">Premium</p>
            </div>
            <button className="hover:underline text-blue-700 font-semibold">
              Change
            </button>
          </div>
          <div className="w-[450px] mt-4">
            <p className="text-xs text-[#8c8c8c] ">
              Your payments will be processed internationally. Additional bank
              fees may apply.
            </p>
            <p className="text-xs text-[#8c8c8c] mt-6">
              By checking the checkbox below, you agree to our{' '}
              <a
                href="https://help.netflix.com/legal/termsofuse"
                className="text-blue-600"
                target="_blank"
              ></a>
              <a
                href="https://help.netflix.com/legal/privacy"
                className="text-blue-600"
                target="_blank"
              >
                Terms of Use, Privacy Statement
              </a>
              , and that you are over 18. Netflix will automatically continue
              your membership and charge the membership fee (currently 260,000
              ₫/month) to your payment method until you cancel. You may cancel
              at any time to avoid future charges.
            </p>
          </div>

          <div className="flex gap-3 pr-[360px] my-4">
            <input type="checkbox" className="w-6 h-6" />
            <label className="text-[#8c8c8c]">I agree</label>
          </div>

          <Button
            type="submit"
            medium={true}
            textColor="white"
            className="w-[450px] font-medium"
          >
            Start Membership
          </Button>
        </form>
      </div>

      {showCardModal && <CardModal />}
      <Footer bgColor={true} />
    </main>
  );
};

export default CreditOption;
