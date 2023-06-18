import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { saveDataForStepOne } from "../../features/user/userSlice";

const MALE = 'male'
const FEMALE = 'female'
export const NOT_CHOSEN = 'not chosen'

export const StepOneForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const {
    reset,
    register,
    getValues,
    handleSubmit,
    formState: { isSubmitSuccessful, isValid, errors }
  } = useForm({
    defaultValues: {
      nickname: state.nickname,
      name: state.name,
      surname: state.surname,
      sex: state.sex
    },
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data)
    dispatch(saveDataForStepOne(data));
    navigate('/advantages');
  }
  const onClickBack = () => {
    dispatch(saveDataForStepOne(getValues()));
    navigate('/');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'text-sm m-14 pt-10'}
    >
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="nickname">
            Nickname
          </label>
        </div>
        <input
          // value={state.nickname}
          id={'field-nickname'}
          placeholder={'Nickname'}
          name={'nickname'}
          type="text"
          {...register('nickname', {
            required: 'Обязательное поле для заполнения',
            maxLength: {
              value: 30,
              message: 'Максимальная длина - 30 символов',
            },
            pattern: {
              value: /^[a-zA-Z0-9А-Яа-я]+$/,
              message: 'Допустимы только буквы и цифры',
            },
          })}
          className={"border border-gray-300 p-2 w-2/4 rounded"}
        />
        <div>
          {errors?.nickname?.message || ''}
        </div>
      </div>
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="name">
            Name
          </label>
        </div>
        <input
          // value={state.name}
          id={'field-name'}
          placeholder={'Name'}
          name={'name'}
          type="text"
          {...register('name', {
            required: 'Обязательное поле для заполнения',
            maxLength: {
              value: 50,
              message: 'Максимальная длина - 50 символов',
            },
            pattern: {
              value: /^[A-Za-zА-Яа-я]+$/,
              message: 'Допустимы только английские и русские буквы',
            },
          })}
          className={"border border-gray-300 p-2 w-2/4 rounded"}
        />
        <div>
          {errors?.name?.message || ''}
        </div>
      </div>
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="surname">
            Surname
          </label>
        </div>
        <input
          // value={state.surname}
          id={'field-sername'}
          placeholder={'Surname'}
          name={'surname'}
          type="text"
          {...register('surname', {
            required: 'Обязательное поле для заполнения',
            maxLength: {
              value: 50,
              message: 'Максимальная длина - 50 символов',
            },
            pattern: {
              value: /^[A-Za-zА-Яа-я]+$/,
              message: 'Допустимы только английские и русские буквы',
            },
          })}
          className={"border border-gray-300 p-2 w-2/4 rounded"}
        />
        <div>
          {errors?.surname?.message || ''}
        </div>
      </div>
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="sex">
            Sex
          </label>
        </div>
        <select
          // value={state.sex}
          id={'field-sex'}
          name={"sex"}
          className={"border border-gray-300 p-2 w-2/4 rounded"}
          {...register('sex', {
            required: 'Обязательное поле для заполнения'
          })}
        >
          <option value="not chosen"><span className={'text-folderGrey'}>Не выбрано</span></option>
          <option value={MALE} id={'field-sex-option-man'}>male</option>
          <option value={FEMALE} id={'field-sex-option-woman'}>female</option>
        </select>
        <div>
          {errors?.sex?.message || ''}
        </div>
      </div>
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
          id={'button-next'}
          type={'submit'}
          className={'bg-buttonBlue rounded-md text-white p-3 hover:cursor-pointer'}
          disabled={!isValid}
        >
          Далее
        </button>
      </div>
    </form>
  )
}
