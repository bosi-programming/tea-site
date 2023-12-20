import { useIntl } from 'react-intl';
import { Cup } from '@/icons/Cup';
import { Leaf } from '@/icons/Leaf';
import { Paragraph, Timer } from '@/components';
import { useInfusionStore } from '@/stores';

export function StartInfusionSection() {
  const intl = useIntl();
  const { grams, infusionsTime, totalInfusions } = useInfusionStore();

  if (!grams || !infusionsTime || !totalInfusions) {
    return null;
  }

  return (
    <>
      <Paragraph>
        <span className="dark:text-pink">
          <Leaf
            height={24}
            width={24}
            className="inline-block align-middle"
          />{' '}
        </span>
        {grams} g
      </Paragraph>
      <Paragraph>
        <span className="dark:text-pink">
          <Cup
            height={24}
            width={24}
            className="inline-block align-middle"
          />{' '}
        </span>
        {
          totalInfusions
        }{' '}
        {intl.formatMessage({ id: 'steeps' })}{' '}
        {infusionsTime.join(', ')}{' '}
        {intl.formatMessage({ id: 'seconds' })}
      </Paragraph>
      <Timer
        infusionTime={
          infusionsTime
        }
      />
    </>)
}
