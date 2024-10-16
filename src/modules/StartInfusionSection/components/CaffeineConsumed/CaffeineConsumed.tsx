import { Paragraph } from '@/components';
import { useInfusionStore } from '@/stores';
import { useIntl } from 'react-intl';
import { calculateCaffeinePercentage } from './calculateCaffeinePercentage';
import { CAFFEINE_BY_TEA } from '@/App.constants';
import { Caffeine } from '@/icons/Caffeine';

export interface CaffeineConsumedProps {
  steep: number;
}

export function CaffeineConsumed({ steep }: CaffeineConsumedProps) {
  const intl = useIntl();
  const { grams, infusionsTime, teaType } = useInfusionStore();

  if (!grams || !infusionsTime || !teaType) {
    return null;
  }
  const maxCaffeine = grams * CAFFEINE_BY_TEA[teaType];
  let totalInfusionTime = 0;
  for (let i = 0; i < steep; i++) {
    totalInfusionTime = totalInfusionTime + infusionsTime[i];
  }

  const percentageOfCaffeineConsumed =
    calculateCaffeinePercentage(totalInfusionTime);
  const caffeineConsumed = Math.ceil(
    percentageOfCaffeineConsumed * maxCaffeine,
  );
  const caffeineConsumedText =
    caffeineConsumed > maxCaffeine ? maxCaffeine : caffeineConsumed;

  return (
      <Paragraph className="text-sm">
      <span className="dark:text-pink">
        <Caffeine
          height={24}
          width={24}
          className="inline-block align-middle"
        />{' '}
      </span>
      {intl.formatMessage(
        { id: 'caffeineConsumed' },
        { caffeineConsumed: caffeineConsumedText, maxCaffeine },
      )}
    </Paragraph>
  );
}
