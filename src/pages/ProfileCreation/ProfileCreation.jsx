import { StepOneForm } from "../../components/StepOneForm";
import Stepper from "../../components/Stepper";

export const ProfileCreation = () => {
  return (
    <div className={''}>
      <Stepper step={1} />
      <StepOneForm />
    </div>
  )
}
