import { Paragraph, Button } from '@/components';
import { useIntl } from 'react-intl';
import { useTimer } from './useTimer';

export function Timer({ infusionTime }: { infusionTime: number[] }) {
  const intl = useIntl();

  const { steep, handleStart, start, timeText } = useTimer(infusionTime);

  return (
    <div className="w-full text-center">
      <Paragraph className="mt-10">
        {intl.formatMessage(
          { id: 'timerInfusions' },
          { steeps: steep + 1, totalSteeps: infusionTime.length },
        )}
      </Paragraph>
      <Button
        className="mb-0 mt-2"
        onClick={(e) => handleStart(e)}
        disabled={start || steep === infusionTime.length}
      >
        {timeText}
      </Button>
    </div>
  );
}
