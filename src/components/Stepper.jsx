import clsx from "clsx";

export const Stepper = ({ step }) => {
  return (
    <div className={'flex bg-bgForSteps m-14 h-3 relative rounded-full'}>
      <div className={clsx('w-1/2 rounded-full', step >= 2 && 'bg-primary')}></div>
      <div className={clsx('w-1/2 rounded-full', step === 3 && 'bg-primary')}></div>
      <div className={'absolute w-full flex justify-between -top-1/3'}>
        <div className={clsx('rounded-full w-5 h-5 relative', step === 1 ? 'border-8 border-primary bg-white' : 'bg-bgForCircleSteps', step > 1 && 'bg-primary')}>

          {step > 1 && (
            <svg className={'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'} width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66147 7.87365C4.56698 7.99874 4.41929 8.07227 4.26252 8.07227H3.68243C3.54729 8.07227 3.41791 8.01757 3.32376 7.92063L0.504131 5.01762C0.315687 4.8236 0.315686 4.51491 0.504131 4.32089L0.975725 3.83535C1.1721 3.63317 1.49669 3.63317 1.69306 3.83535L3.49489 5.69046C3.70845 5.91034 4.06776 5.88806 4.25251 5.64349L8.15121 0.482651C8.32099 0.2579 8.64283 0.217688 8.86269 0.393752L9.38636 0.813089C9.59761 0.982258 9.63592 1.28881 9.47278 1.50476L4.66147 7.87365Z"
                fill="white"/>
            </svg>
          )}

          <span className={'absolute text-bgForCircleSteps top-7 left-1.5'}>1</span>
        </div>
        <div className={clsx('rounded-full w-5 h-5 relative', step === 2 ? 'border-8 border-primary bg-white' : 'bg-bgForCircleSteps', step > 2 && 'bg-primary')}>
          {step > 2 && (
            <svg className={'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'} width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66147 7.87365C4.56698 7.99874 4.41929 8.07227 4.26252 8.07227H3.68243C3.54729 8.07227 3.41791 8.01757 3.32376 7.92063L0.504131 5.01762C0.315687 4.8236 0.315686 4.51491 0.504131 4.32089L0.975725 3.83535C1.1721 3.63317 1.49669 3.63317 1.69306 3.83535L3.49489 5.69046C3.70845 5.91034 4.06776 5.88806 4.25251 5.64349L8.15121 0.482651C8.32099 0.2579 8.64283 0.217688 8.86269 0.393752L9.38636 0.813089C9.59761 0.982258 9.63592 1.28881 9.47278 1.50476L4.66147 7.87365Z"
                fill="white"/>
            </svg>
          )}
          <span className={'absolute text-bgForCircleSteps top-7 left-1.5'}>2</span>
        </div>
        <div className={clsx('rounded-full w-5 h-5 relative', step === 3 ? 'border-8 border-primary bg-white' : 'bg-bgForCircleSteps', )}>
          <span className={'absolute text-bgForCircleSteps top-7 left-1.5'}>3</span>
        </div>
      </div>
    </div>
  )
}

export default Stepper
