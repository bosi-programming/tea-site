import { useIntl } from 'react-intl';
import { calculateInfusionTime } from '@/App.constants';
import { TConcentration, TStrength } from '@/App.types';
import { Cup } from '@/icons/Cup';
import { Leaf } from '@/icons/Leaf';
import { Paragraph, Timer } from '@/components';

interface InfusionDataProps {
  strength: TStrength;
  concentration: TConcentration;
  size: number | string;
}

export function StartInfusionSection({ strength, concentration, size }: InfusionDataProps) {
  const intl = useIntl();

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
        {Math.ceil(Number(size) / Number(concentration.replace('1/', '')))} g
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
          calculateInfusionTime(strength, concentration).length
        }{' '}
        {intl.formatMessage({ id: 'steeps' })}{' '}
        {calculateInfusionTime(strength, concentration).join(', ')}{' '}
        {intl.formatMessage({ id: 'seconds' })}
      </Paragraph>
      <Timer
        infusionTime={
          calculateInfusionTime(strength, concentration)
        }
      />
    </>)
}
