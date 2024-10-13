import { BASE_INFUSION_TIME, CAFFEINE_BY_TEA } from '@/App.constants';
import { TConcentration, TTea } from '@/App.types';

const PRESETS_CONCENTRATION = {
  strongGongfu: '1/10' as TConcentration,
  gongfu: '1/15' as TConcentration,
  semiGongfu: '1/30' as TConcentration,
  strongSemiGongfu: '1/20' as TConcentration,
  western: '1/50' as TConcentration,
};

const PRESETS_INFUSIONS_TIME = {
  strongGongfu: BASE_INFUSION_TIME.strong[PRESETS_CONCENTRATION.gongfu],
  normalGongfu: BASE_INFUSION_TIME.normal[PRESETS_CONCENTRATION.gongfu],
  strongSemiGongfu: BASE_INFUSION_TIME.strong[PRESETS_CONCENTRATION.semiGongfu],
  normalSemiGongfu: BASE_INFUSION_TIME.normal[PRESETS_CONCENTRATION.semiGongfu],
  gongfuChineseGreen: [15, 25, 40, 60, 90, 180, 300, 600, 1200],
  senchado: [60, 0, 60, 180, 300, 600, 1200],
  westernBlack: [180, 300, 600, 1200],
  westernChineseGreen: [120, 180, 300, 600, 1200],
};

const PRESETS_TEA_TYPE = Object.keys(CAFFEINE_BY_TEA).reduce(
  (acc, key) => ({
    ...acc,
    [key]: key,
  }),
  {},
) as Record<NonNullable<TTea>, NonNullable<TTea>>;

export const PRESETS = {
  strongGongfuRipePuer: {
    concentration: PRESETS_CONCENTRATION.strongGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongGongfu,
    teaType: PRESETS_TEA_TYPE.ripePuer,
  },
  gongfuRipePuer: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongGongfu,
    teaType: PRESETS_TEA_TYPE.ripePuer,
  },
  gongfuRawPuer: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalGongfu,
    teaType: PRESETS_TEA_TYPE.rawPuer,
  },
  gongfuBlack: {
    concentration: PRESETS_CONCENTRATION.gongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalGongfu,
    teaType: PRESETS_TEA_TYPE.black,
  },
  semiGongfuRipePuer: {
    concentration: PRESETS_CONCENTRATION.strongSemiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongSemiGongfu,
    teaType: PRESETS_TEA_TYPE.ripePuer,
  },
  semiGongfuRawPuer: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.normalSemiGongfu,
    teaType: PRESETS_TEA_TYPE.rawPuer,
  },
  semiGongfuWhite: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongSemiGongfu,
    teaType: PRESETS_TEA_TYPE.white,
  },
  semiGongfuBlack: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.strongSemiGongfu,
    teaType: PRESETS_TEA_TYPE.black,
  },
  gongfuChineseGreen: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.gongfuChineseGreen,
    teaType: PRESETS_TEA_TYPE.green,
  },
  senchado: {
    concentration: PRESETS_CONCENTRATION.semiGongfu,
    infusionsTime: PRESETS_INFUSIONS_TIME.senchado,
    teaType: PRESETS_TEA_TYPE.green,
  },
  westernBlack: {
    concentration: PRESETS_CONCENTRATION.western,
    infusionsTime: PRESETS_INFUSIONS_TIME.westernBlack,
    teaType: PRESETS_TEA_TYPE.black,
  },
  westernChineseGreen: {
    concentration: PRESETS_CONCENTRATION.western,
    infusionsTime: PRESETS_INFUSIONS_TIME.westernChineseGreen,
    teaType: PRESETS_TEA_TYPE.green,
  },
};
