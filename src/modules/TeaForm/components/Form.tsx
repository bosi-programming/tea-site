import { useIntl } from 'react-intl';
import { Input, Paragraph, Selector } from '@/components';
import {
  BASE_INFUSION_TIME,
  CAFFEINE_BY_TEA,
  CONCENTRATIONS,
} from '@/App.constants';
import { TConcentration, TTea } from '@/App.types';
import { useInfusionStore } from '@/stores';
import { PresetSelector } from '.';

export function Form() {
  const intl = useIntl();

  const {
    hideForm,
    size,
    handleSetSize,
    concentration,
    handleSetConcentration,
    strength,
    handleSetStrength,
    teaType,
    setTeaType: handleSetTeaType,
  } = useInfusionStore();

  const STRENGHTS = Object.keys(BASE_INFUSION_TIME).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));

  const TEAS = Object.keys(CAFFEINE_BY_TEA).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));
  if (hideForm) {
    return null;
  }

  return (
    <div className="flex w-full flex-col justify-center self-center lg:my-10 lg:w-6/12 lg:items-center">
      <Input
        labelChildren={intl.formatMessage({ id: 'sizeLabel' })}
        value={size}
        onChange={(e) => handleSetSize(Number(e.target.value))}
        type="number"
        className="w-full"
      />
      <PresetSelector />
      <Paragraph className="mb-6">
        {intl.formatMessage({ id: 'orLabel' })}
      </Paragraph>
      <Selector
        labelChildren={intl.formatMessage({ id: 'strengthLabel' })}
        options={STRENGHTS}
        value={strength ?? 'default'}
        onChange={(e) =>
          e.target.value &&
          handleSetStrength(e.target.value as keyof typeof BASE_INFUSION_TIME)
        }
        className="w-full"
      />
      <Selector
        labelChildren={intl.formatMessage({ id: 'concentrationLabel' })}
        options={CONCENTRATIONS}
        value={concentration ?? 'default'}
        onChange={(e) =>
          e.target.value &&
          handleSetConcentration(e.target.value as TConcentration)
        }
        className="w-full"
      />
      <Selector
        labelChildren={intl.formatMessage({ id: 'teaTypeLabel' })}
        options={TEAS}
        value={teaType ?? 'default'}
        onChange={(e) =>
          e.target.value && handleSetTeaType(e.target.value as TTea)
        }
        className="w-full"
      />
    </div>
  );
}
