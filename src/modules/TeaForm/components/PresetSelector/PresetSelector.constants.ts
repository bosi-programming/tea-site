import { BASE_INFUSION_TIME } from '@/App.constants';
import { TConcentration } from '@/App.types';

const PRESETS_CONCENTRATION = {
  gongfu: '1/15' as TConcentration,
  semiGongfu: '1/30' as TConcentration,
  western: '1/50' as TConcentration,
};

const PRESETS_INFUSIONS_TIME = {
  strongGongfu: BASE_INFUSION_TIME.strong[PRESETS_CONCENTRATION.gongfu],
  normalGongfu: BASE_INFUSION_TIME.normal[PRESETS_CONCENTRATION.gongfu],
  strongSemiGongfu: BASE_INFUSION_TIME.strong[PRESETS_CONCENTRATION.semiGongfu],
  normalSemiGongfu: BASE_INFUSION_TIME.normal[PRESETS_CONCENTRATION.semiGongfu],
  gongfuChineseGreen: [15, 25, 40, 60, 90, 180, 300, 600, 1200],
  senchado: [30, 0, 30, 60, 180, 300, 600, 1200],
  westernBlack: [180, 300, 600, 1200],
  westernChineseGreen: [120, 180, 300, 600, 1200],
};

export const PRESETS = {
  gongfuRipePuer: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongGongfu,
  },
  gongfuRawPuer: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalGongfu,
  },
  gongfuBlack: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalGongfu,
  },
  semiGongfuRipePuer: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongSemiGongfu,
  },
  semiGongfuRawPuer: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalSemiGongfu,
  },
  semiGongfuBlack: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalSemiGongfu,
  },
  gongfuChineseGreen: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.gongfuChineseGreen,
  },
  senchado: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.senchado,
  },
  westernBlack: {
    concentration: PRESETS_CONCENTRATION.western,
    infusionsTime: PRESETS_INFUSIONS_TIME.westernBlack,
  },
  westernChineseGreen: {
    concentration: PRESETS_CONCENTRATION.western,
    infusionsTime: PRESETS_INFUSIONS_TIME.westernChineseGreen,
  },
};
