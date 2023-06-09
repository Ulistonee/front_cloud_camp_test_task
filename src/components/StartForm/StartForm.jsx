import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/userSlice";

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
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log(phoneNumber);
    console.log(email);
    navigate('/create');
  }

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
        <input
          placeholder={'+7 999 999-99-99'}
          name={'phoneNumber'}
          type={'tel'}
          {...register('phoneNumber', {
            required: 'Обязательное поле для заполнения'
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
            required: 'Обязательное поле для заполнения'
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
        className={'bg-buttonBlue rounded-md text-white p-5'}
      >
        Начать
      </button>
    </form>
  )
}
