import { useIntl } from 'react-intl';
import { PRESETS } from './PresetSelector.constants';
import { useState } from 'react';
import { Selector } from '@/components';
import { TConcentration } from '@/App.types';
import { useInfusionStore } from '@/stores';

export interface PresetSelectorProps {
  handleSetConcentration: (value: TConcentration) => void;
}

export function PresetSelector({
  handleSetConcentration,
}: PresetSelectorProps) {
  const intl = useIntl();
  const { setInfusionsTime } = useInfusionStore();
  const [preset, setPreset] = useState<keyof typeof PRESETS | undefined>();

  const options = Object.keys(PRESETS).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));

  const handlePresetChange = (value: keyof typeof PRESETS) => {
    setPreset(value);
    handleSetConcentration(PRESETS[value].concentration);
    setInfusionsTime(PRESETS[value].infusionsTime);
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
