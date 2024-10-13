import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { PRESETS } from './PresetSelector.constants';
import { Selector } from '@/components';
import { useInfusionStore } from '@/stores';

export function PresetSelector() {
  const intl = useIntl();
  const { infusionsTime, setInfusionsTime, handleSetConcentration, setTeaType } =
    useInfusionStore();
  const [preset, setPreset] = useState<keyof typeof PRESETS | undefined>();

  useEffect(() => {
    if (!infusionsTime) {
      setPreset(undefined);
    }
  }, [infusionsTime]);

  const options = Object.keys(PRESETS).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));

  const handlePresetChange = (value: keyof typeof PRESETS) => {
    setPreset(value);
    handleSetConcentration(PRESETS[value].concentration);
    setInfusionsTime(PRESETS[value].infusionsTime);
    setTeaType(PRESETS[value].teaType);
  };

  return (
    <Selector
      labelChildren={intl.formatMessage({ id: 'presetLabel' })}
      options={options}
      value={preset ?? 'default'}
      onChange={(e) =>
        e.target.value &&
        handlePresetChange(e.target.value as keyof typeof PRESETS)
      }
      className="w-full"
    />
  );
}
