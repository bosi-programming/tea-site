import { Paragraph, Button, Selector } from '@/components';
import { useIntl } from 'react-intl';
import { useTimer } from './useTimer';
import { useInfusionStore } from '@/stores';

export function Timer({ infusionTime }: { infusionTime: number[] }) {
  const intl = useIntl();

  const { totalInfusions } = useInfusionStore();
  const { steep, setSteep, handleStart, start, timeText } =
    useTimer(infusionTime);

  return (
    <div className="w-full text-center">
      <Paragraph className="mt-10">
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
                className="w-16 text-center"
              />
            ),
            totalSteeps: infusionTime.length,
          },
        )}
      </Paragraph>
      <Button
        className="mb-0 mt-2 border-yellow-700 bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-500 disabled:hover:bg-yellow-500 dark:border-pink dark:bg-thulian dark:hover:bg-pink dark:focus:bg-pink dark:disabled:border-gray-600 dark:disabled:bg-gray-600 dark:disabled:hover:bg-gray-600"
        onClick={(e) => handleStart(e)}
        disabled={start || steep === infusionTime.length}
      >
        {timeText}
      </Button>
    </div>
  );
}
