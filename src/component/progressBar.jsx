import StepsProgressBar from "./stepsProgressBar";
import '../assets/css/progress-bar.css';
export default function ProgressBar({title, steps}) {
  const listItems = steps.map((step) =>
    <StepsProgressBar
      title={step.title}
      isComplete={step.isComplete}
      active={step.active}
    />
  );
  return (
    <>
      <h6 className="title-progress-bar">{title}</h6>
      <ol class="progress-bar">
        {listItems}
      </ol>
    </>
  );
}