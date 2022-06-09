export default function stepsProgressBar({title, isComplete, active}) {
  return (
    <>
      <li className={'' + (isComplete ? 'is-complete': '') + (active ? ' is-active': '')}>
        <span>{title}</span>
      </li>
    </>
  );
}