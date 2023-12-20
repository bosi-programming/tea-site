import { Paragraph } from '../Paragraph';
import { useIntl } from 'react-intl';
import { useTimer } from './useTimer';

const baseClasses = [
  'text-center',
  'm-auto',
  'mb-0',
  'mt-2',
  'w-6/12',
  'rounded',
  'border',
  'border-yellow-700',
  'bg-yellow-500',
  'px-4',
  'py-2',
  'font-mono',
  'font-bold',
  'text-slate-900',
  'hover:bg-yellow-700',
  'focus:bg-yellow-500',
  'disabled:hover:bg-yellow-500',
];

const darkClasses = [
  'dark:border-pink',
  'dark:bg-thulian',
  'dark:text-green',
  'dark:hover:bg-pink',
  'dark:focus:bg-pink',
  'dark:disabled:hover:bg-gray-600',
  'dark:disabled:bg-gray-600',
  'dark:disabled:border-gray-600',
];

export function Timer({ infusionTime }: { infusionTime: number[] }) {
  const intl = useIntl();

  const { steep, handleStart, start, timeText } = useTimer(infusionTime);

  return (
    <div className="w-full text-center">
      <Paragraph className="mt-10">
        {intl.formatMessage({ id: 'timerInfusions' }, { steeps: steep + 1, totalSteeps: infusionTime.length })}
      </Paragraph>
      <button
        className={[...baseClasses, ...darkClasses].join(' ')}
        onClick={(e) => handleStart(e)}
        role="button"
        disabled={start || steep === infusionTime.length}
      >
        {timeText}
      </button>
    </div>
  );
}
