import { useIntl } from 'react-intl';
import { Cup } from '@/icons/Cup';
import { Leaf } from '@/icons/Leaf';
import { Button, Paragraph } from '@/components';
import { useInfusionStore } from '@/stores';

import { Timer } from './components';
import { CaffeineConsumed } from './components/CaffeineConsumed';
import { useTimer } from './useTimer';

export function StartInfusionSection() {
  const intl = useIntl();
  const { grams, infusionsTime, totalInfusions, clearInfusionStore } =
    useInfusionStore();
  const { steep, setSteep, handleStart, start, timeText } = useTimer(
    infusionsTime ?? [0],
  );

  if (!grams || !infusionsTime || !totalInfusions) {
    return null;
  }

  // TODO: Add reset button
  return (
    <section className="w-5/6 max-w-screen-md text-left">
      <Paragraph className="text-sm">
        <span className="dark:text-pink">
          <Leaf height={24} width={24} className="inline-block align-middle" />{' '}
        </span>
        {grams} g
      </Paragraph>
      <Paragraph className="text-sm">
        <span className="dark:text-pink">
          <Cup height={24} width={24} className="inline-block align-middle" />{' '}
        </span>
        {totalInfusions} {intl.formatMessage({ id: 'steeps' })}{' '}
        {infusionsTime
          .map((time) =>
            time < 60
              ? `${time}s`
              : `${Math.floor(time / 60)}:${(time % 60)
                .toString()
                .padStart(2, '0')} min`,
          )
          .join(', ')}
      </Paragraph>
      <CaffeineConsumed steep={steep} />
      <Timer
        steep={steep}
        setSteep={setSteep}
        start={start}
        handleStart={handleStart}
        timeText={timeText}
      />
      <div className="w-full text-center">
        <Button
          onClick={clearInfusionStore}
          className="mt-5 border-red-700 bg-red-500 hover:bg-red-600 dark:border-red-400 dark:bg-red-400 dark:hover:bg-red-300"
        >
          {intl.formatMessage({ id: 'reset' })}
        </Button>
      </div>
    </section>
  );
}
