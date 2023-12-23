import { Paragraph } from '@/components/Paragraph';
import { useIntl } from 'react-intl';
import { useTimer } from './useTimer';
import { baseClasses, darkClasses } from './Timer.styles';

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
