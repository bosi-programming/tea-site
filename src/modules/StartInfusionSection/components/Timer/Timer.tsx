import { Paragraph, Button, Selector } from '@/components';
import { useIntl } from 'react-intl';
import { useInfusionStore } from '@/stores';

export interface TimerProps {
  steep: number;
  setSteep: (val: number) => void;
  start: boolean;
  timeText: string;
  handleStart: (e: React.MouseEvent) => void;
}

export function Timer({
  steep,
  setSteep,
  handleStart,
  start,
  timeText,
}: TimerProps) {
  const intl = useIntl();

  const { totalInfusions, infusionsTime } = useInfusionStore();

  if (!infusionsTime || !totalInfusions) {
    return null;
  }

  return (
    <div className="w-full text-center">
      <Paragraph className="mt-0 text-sm md:mt-10">
        {intl.formatMessage(
          { id: 'timerInfusions' },
          {
            steeps: (
              <Selector
                labelChildren={intl.formatMessage({ id: 'concentrationLabel' })}
                options={Array.from(Array(totalInfusions).keys()).map((i) => ({
                  id: i.toString(),
                  label: (i + 1).toString(),
                }))}
                value={steep}
                onChange={(e) =>
                  e.target.value && setSteep(Number(e.target.value))
                }
                className="!mb-0 w-16 text-center"
              />
            ),
            totalSteeps: infusionsTime.length,
          },
        )}
      </Paragraph>
      <Button
        className="mb-0 mt-2 border-yellow-700 bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-500 disabled:hover:bg-yellow-500 dark:border-pink dark:bg-thulian dark:hover:bg-pink dark:focus:bg-pink dark:disabled:border-gray-600 dark:disabled:bg-gray-600 dark:disabled:hover:bg-gray-600"
        onClick={(e) => handleStart(e)}
        disabled={start || steep === infusionsTime.length}
      >
        {timeText}
      </Button>
    </div>
  );
}
