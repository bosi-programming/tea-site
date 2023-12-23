import { useIntl } from 'react-intl';
import { Cup } from '@/icons/Cup';
import { Leaf } from '@/icons/Leaf';
import { Button, Paragraph } from '@/components';
import { useInfusionStore } from '@/stores';

import { Timer } from './components';

export function StartInfusionSection() {
  const intl = useIntl();
  const { grams, infusionsTime, totalInfusions, clearInfusionStore } =
    useInfusionStore();

  if (!grams || !infusionsTime || !totalInfusions) {
    return null;
  }

  // TODO: Add reset button
  return (
    <section className="w-5/6 max-w-screen-md text-left">
      <Paragraph>
        <span className="dark:text-pink">
          <Leaf height={24} width={24} className="inline-block align-middle" />{' '}
        </span>
        {grams} g
      </Paragraph>
      <Paragraph>
        <span className="dark:text-pink">
          <Cup height={24} width={24} className="inline-block align-middle" />{' '}
        </span>
        {totalInfusions} {intl.formatMessage({ id: 'steeps' })}{' '}
        {infusionsTime.join(', ')} {intl.formatMessage({ id: 'seconds' })}
      </Paragraph>
      <Timer infusionTime={infusionsTime} />
      <div className="w-full text-center">
        <Button
          onClick={clearInfusionStore}
          className="mt-5 border-red-700 bg-red-500 dark:border-red-400 dark:bg-red-400"
        >
          {intl.formatMessage({ id: 'reset' })}
        </Button>
      </div>
    </section>
  );
}
