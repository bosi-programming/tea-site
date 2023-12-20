import { useState } from 'react';
import { useIntl } from 'react-intl';
import { Input, Selector } from '@/components';
import { BASE_INFUSION_TIME, CONCENTRATIONS } from '@/App.constants';
import { TConcentration, TStrength } from '@/App.types';
import { useInfusionStore } from '@/stores';

export function TeaForm() {
  const intl = useIntl();

  const [strength, setStrength] = useState<TStrength>();
  const [concentration, setConcentration] = useState<TConcentration>();
  const [size, setSize] = useState<number | string>('');

  const { setGrams, setInfusionsTime } = useInfusionStore();

  const STRENGHTS = Object.keys(BASE_INFUSION_TIME).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));

  const handleSetSize = (newSize: number) => {
    setSize(newSize);
    if (!concentration) return;
    setGrams(Math.ceil(newSize / Number(concentration.replace('1/', ''))));
  }

  const handleSetConcentration = (newConcentration: TConcentration) => {
    setConcentration(newConcentration);
    if (size) {
      setGrams(Math.ceil(Number(size) / Number(newConcentration.replace('1/', ''))));
    }
    if (strength) {
      setInfusionsTime(BASE_INFUSION_TIME[strength][newConcentration]);
    }
  }

  const handleSetStrength = (newStrength: TStrength) => {
    setStrength(newStrength);
    if (concentration) {
      setInfusionsTime(BASE_INFUSION_TIME[newStrength][concentration]);
    }
  }

  return (
    <div className="flex w-full flex-col justify-center self-center lg:my-10 lg:w-6/12 lg:items-center">
      <Selector
        labelChildren={intl.formatMessage({ id: 'strengthLabel' })}
        options={STRENGHTS}
        value={strength ?? 'default'}
        onChange={(e) =>
          e.target.value && handleSetStrength(e.target.value as keyof typeof BASE_INFUSION_TIME)
        }
        className="w-full"
      />
      <Selector
        labelChildren={intl.formatMessage({ id: 'concentrationLabel' })}
        options={CONCENTRATIONS}
        value={concentration ?? 'default'}
        onChange={(e) =>
          e.target.value && handleSetConcentration(e.target.value as TConcentration)
        }
        className="w-full"
      />
      <Input
        labelChildren={intl.formatMessage({ id: 'sizeLabel' })}
        value={size}
        onChange={(e) => handleSetSize(Number(e.target.value))}
        type="number"
        className="w-full"
      />
    </div>
  )
}

