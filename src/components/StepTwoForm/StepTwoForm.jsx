import {useFieldArray, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {addAdvantages, removeAdvantage, saveDataForStepTwo} from "../../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";

export const StepTwoForm = () => {
  const state = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    getValues,
    control,
    formState: { isSubmitSuccessful, isValid, errors }
  } = useForm({
    defaultValues: {
      advantages: state.advantages,
      checkbox: state.checkbox,
      radio: state.radio
    },
    mode: 'onChange'
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "advantages", // unique name for your Field Array
  });

  const onSubmit = (data) => {
    dispatch(saveDataForStepTwo(getValues()))
    navigate('/about');
  }


  const handleRemoveField = (index) => {
    remove(index)
    dispatch(removeAdvantage(index));
  };

  const handleAddField = (event) => {
    append([{ value: '' }]);
  };

  const onClickBack = () => {
    dispatch(saveDataForStepTwo(getValues()))
    navigate('/create');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'text-sm m-14 pt-10'}
    >
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="advantages">
            Advantages
          </label>
        </div>
        {fields.map((advantage, index) => (
          <div className={'py-2'} key={index}>
            <div className={'flex gap-4'}>

            <input
              id={'field-advantages-' + (index + 1)}
              placeholder={'Advantage'}
              name={'advantages'}
              type="text"
              className={"border border-gray-300 p-2 w-2/4 rounded"}
              {...register(`advantages.${index}.value`)}
            />
              <button id={'button-remove-' + (index + 1)} onClick={() => handleRemoveField(index)} className={'focus:outline-none'} type={'button'}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.453 15.6522L2.55826 7.15225C2.52719 6.85703 2.75867 6.5999 3.05552 6.5999H12.9447C13.2416 6.5999 13.4731 6.85703 13.442 7.15225L12.5472 15.6522C12.5205 15.9067 12.3059 16.0999 12.05 16.0999H3.95025C3.69437 16.0999 3.47979 15.9067 3.453 15.6522Z" fill="#CCCCCC"/>
                  <path d="M15.0001 4.6999H1.00012C0.72398 4.6999 0.500122 4.47605 0.500122 4.1999V3.2999C0.500122 3.02376 0.72398 2.7999 1.00012 2.7999H3.35511C3.44983 2.7999 3.54261 2.77299 3.62263 2.72231L6.37761 0.977493C6.45764 0.92681 6.55041 0.899902 6.64514 0.899902H9.35511C9.44983 0.899902 9.54261 0.92681 9.62263 0.977493L12.3776 2.72231C12.4576 2.77299 12.5504 2.7999 12.6451 2.7999H15.0001C15.2763 2.7999 15.5001 3.02376 15.5001 3.2999V4.1999C15.5001 4.47604 15.2763 4.6999 15.0001 4.6999Z" fill="#CCCCCC"/>
                </svg>
              </button>
            </div>
            <div>
              {errors?.advantages?.message || ''}
            </div>
          </div>
        ))}
        <div className={'py-2'}>
          <button
            id={'button-add'}
            type="button"
            onClick={handleAddField}
            className={'w-10 h-10 border border-buttonBorderBlue text-3xl text-buttonBorderBlue cursor-pointer duration-500 hover:scale-110 rounded'}
          >
            +
          </button>
        </div>
      </div>
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="checkbox">
            Checkbox group
          </label>
        </div>
        <div>
          <input
            id={'field-checkbox-group-option-1'}
            type="checkbox"
            value={'1'}
            {...register('checkbox')}
          />
          <span className={'px-2'}>1</span>
        </div>
        <div>
          <input
            id={'field-checkbox-group-option-2'}
            type="checkbox"
            value={'2'}
            {...register('checkbox')}
          />
          <span className={'px-2'}>2</span>
        </div>
        <div>
          <input
            id={'field-checkbox-group-option-3'}
            type="checkbox"
            value={'3'}
            {...register('checkbox')}
          />
          <span className={'px-2'}>3</span>
        </div>
      </div>
      <div className={'pb-5'}>
        <div className={'py-2'}>
          <label htmlFor="radio">
            Radio group
          </label>
        </div>
        <div>
          <input
            id={'field-radio-group-option-1'}
            type="radio"
            value={'1'}
            {...register('radio')}
          />
          <span className={'px-2'}>1</span>
        </div>
        <div>
          <input
            id={'field-radio-group-option-2'}
            type="radio"
            value={'2'}
            {...register('radio')}
          />
          <span className={'px-2'}>2</span>
        </div>
        <div>
          <input
            id={'field-radio-group-option-3'}
            type="radio"
            value={'3'}
            {...register('radio')}
          />
          <span className={'px-2'}>3</span>
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
