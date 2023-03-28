import { Header } from '@/components';
import { Input2 } from '@/utils';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValue = {
  firstName: string;
  lastName: string;
  cardNumber: number;
  expirationDate: number;
  securityCode: number;
};

const CreditOption = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitHanler: SubmitHandler<FormValue> = (data) => {};

  return (
    <main className="w-[100%] flex flex-col items-center">
      <header className="flex justify-between items-center w-[90%]">
        <Header contentBtn="Sign Out" />
      </header>
      <form
        onSubmit={handleSubmit(onSubmitHanler)}
        className="w-[100%] border-t-[1px] border-gray-400/30 flex flex-col items-center pt-16 "
      >
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
        <Input2
          placeHolder="Security Code"
          require={true}
          isError={errors.securityCode}
          registee={register}
          name="securityCode"
        />

        <button type="submit">add</button>
      </form>
    </main>
  );
};

export default CreditOption;
