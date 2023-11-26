import { useIntl } from 'react-intl';
import { BASE_INFUSION_TIME } from '../App.constants';
import { TConcentration, TStrength } from '../App.types';
import { Cup } from '../icons/Cup';
import { Leaf } from '../icons/Leaf';
import { Paragraph } from './Paragraph';
import { Timer } from './Timer';

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
          BASE_INFUSION_TIME[strength][
            concentration
          ].length
        }{' '}
        {intl.formatMessage({ id: 'steeps' })}{' '}
        {BASE_INFUSION_TIME[strength][
          concentration
        ].join(', ')}{' '}
        {intl.formatMessage({ id: 'seconds' })}
      </Paragraph>
      <Timer
        infusionTime={
          BASE_INFUSION_TIME[strength][
          concentration
          ]
        }
      />
    </>)
}
