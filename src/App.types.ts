import { CAFFEINE_BY_TEA } from './App.constants';

export type TStrength = 'weak' | 'weakest' | 'normal' | 'strong' | 'strongest';
export type TConcentration =
  | '1/10'
  | '1/15'
  | '1/20'
  | '1/30'
  | '1/50'
  | '1/100';
export type TTea = keyof typeof CAFFEINE_BY_TEA | null;
