import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { saveDataForStepThree} from "../../features/user/userSlice";
import Stepper from "../../components/Stepper";
import api from "../../api";


export const About = () => {
  const navigate = useNavigate();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitSuccessful, isValid, errors }
  } = useForm({
    defaultValues: {
      about: state.about,
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    dispatch(saveDataForStepThree(data));
    api.submitForm({ ...state, ...data})
  }

  const onClickBack = () => {
    dispatch(saveDataForStepThree(getValues()));
    navigate('/advantages');
  }

  return (
    <div>
      <Stepper step={3} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'text-sm m-14 pt-10 pb-5'}
      >
        <div className={'py-2'}>
          <label htmlFor="about">
            About
          </label>
        </div>
        <textarea
          id={'field-about'}
          name={'about'}
          placeholder={'About me'}
          rows='4'
          cols='50'
          className={"border border-gray-300 p-2 w-2/4 rounded h-32 placeholder:text-start"}
          {...register('about', {
            required: 'Обязательное поле для заполнения',
            maxLength: {
              value: 200,
              message: 'Максимальная длина - 200 символов',
            },
          })}
        />
        <div className={'flex py-8 justify-between'}>
          <button
            id={'button-back'}
            type={'button'}
            onClick={onClickBack}
            className={'border border-buttonBorderBlue rounded-md text-buttonBorderBlue p-3 hover:cursor-pointer'}
          >
            Назад
          </button>
          <button
            id={'button-send'}
            type={'submit'}
            className={'bg-buttonBlue rounded-md text-white p-3 hover:cursor-pointer'}
            disabled={!isValid}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}
