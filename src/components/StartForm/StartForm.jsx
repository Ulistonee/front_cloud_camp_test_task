import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/userSlice";
import {useState} from "react";
import PhoneInput from "react-phone-number-input/input";

export const StartForm = () => {
  const navigate = useNavigate();
  const {phoneNumber, email} = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, isValid, errors }
  } = useForm({
    defaultValues: {
      phoneNumber,
      email
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    navigate('/create');
  }
  const [phone, setPhone] = useState('')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'text-sm p-5'}
    >
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor={'phoneNumber'}>
            Номер телефона
          </label>
        </div>
        <PhoneInput
          onChange={setPhone}
          name={'phoneNumber'}
          // international={false}
          value={phone}
          {...register('phoneNumber', {
            required: 'Обязательное поле для заполнения',
            pattern: {
              value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              message: 'Введите корректный номер телефона'
            },
            // pattern: {
            //   value: /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            //   message: 'Введите номер в формате +7 (900) 000-00-00',
            // },
          })
          }
          className={"text-sm border border-gray-300 p-2 w-2/4 rounded"}
        />
        <input
          placeholder={"+7 (___) ___-__-__"}
          name={'phoneNumber'}
          type={'tel'}
          {...register('phoneNumber', {
            required: 'Обязательное поле для заполнения',
            pattern: {
              value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              message: 'Введите корректный номер телефона'
            },
            // pattern: {
            //   value: /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
            //   message: 'Введите номер в формате +7 (900) 000-00-00',
            // },
          })
          }
          className={"border border-gray-300 p-2 w-2/4 rounded"}
        />
        <div>
          {errors?.phoneNumber?.message || ''}
        </div>
      </div>
      <div className={'mb-10'}>
        <div className={'py-2'}>
          <label htmlFor={'email'}>
            Email
          </label>
        </div>
        <input
          placeholder={'tim.jennings@example.com'}
          name={'email'}
          type={'email'}
          {...register('email', {
            required: 'Обязательное поле для заполнения',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Неверный формат email-адреса"
            }
          })
          }
          className={"border border-gray-300 p-2 w-2/4 rounded"}
        />
        <div>
          {errors?.email?.message || ''}
        </div>
      </div>
      <button
        type={'submit'}
        id={'button-start'}
        className={'bg-buttonBlue rounded-md text-white p-5'}
        disabled={!isValid}
      >
        Начать
      </button>
    </form>
  )
}
