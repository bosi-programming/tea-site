import { useIntl } from 'react-intl';
import { Input, Selector } from '@/components';
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
        onChange={(e) => {
          const value = Number(e.target.value.replace(/[^0-9]/g, ''));
          handleSetSize(value || '');
        }}
        type="text"
        inputMode="numeric"
        className="w-full"
        pattern="[0-9]"
      />
      <PresetSelector />
      <hr className="pb-3" />
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
      <div className="flex w-full flex-row justify-between md:block">
        <Selector
          labelChildren={intl.formatMessage({ id: 'concentrationLabel' })}
          options={CONCENTRATIONS}
          value={concentration ?? 'default'}
          onChange={(e) =>
            e.target.value &&
            handleSetConcentration(e.target.value as TConcentration)
          }
          className="w-5/12 md:w-full"
        />
        <Selector
          labelChildren={intl.formatMessage({ id: 'teaTypeLabel' })}
          options={TEAS}
          value={teaType ?? 'default'}
          onChange={(e) =>
            e.target.value && handleSetTeaType(e.target.value as TTea)
          }
          className="w-5/12 md:w-full"
        />
      </div>
      <hr className="pb-3" />
    </div>
  );
}
