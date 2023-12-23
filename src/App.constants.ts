import { TConcentration, TStrength } from './App.types';

export const BASE_INFUSION_TIME: Record<
  TStrength,
  Record<TConcentration, number[]>
> = {
  weakest: {
    '1/10': [0, 0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/15': [0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/20': [5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/30': [10, 20, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/50': [30, 60, 120, 180, 300, 600],
    '1/100': [120, 180, 300, 600],
  },
  weak: {
    '1/10': [0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/15': [5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/20': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/30': [30, 45, 60, 120, 180, 300, 600],
    '1/50': [60, 120, 180, 300, 600],
    '1/100': [180, 300, 600],
  },
  normal: {
    '1/10': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/15': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/20': [10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/30': [60, 120, 180, 300, 600],
    '1/50': [120, 180, 300, 600],
    '1/100': [300, 600],
  },
  strong: {
    '1/10': [10, 15, 20, 30, 45, 60, 120, 180, 300, 600],
    '1/15': [20, 30, 45, 60, 180, 300, 600],
    '1/20': [30, 45, 60, 180, 300, 600],
    '1/30': [120, 180, 300, 600],
    '1/50': [300, 600],
    '1/100': [600],
  },
  strongest: {
    '1/10': [20, 30, 45, 60, 120, 180, 300, 600],
    '1/15': [30, 60, 180, 300, 600],
    '1/20': [60, 180, 300, 600],
    '1/30': [180, 300, 600],
    '1/50': [600],
    '1/100': [600],
  },
};

export const CONCENTRATIONS = [
  { id: '1/10', label: '1/10' },
  { id: '1/15', label: '1/15' },
  { id: '1/20', label: '1/20' },
  { id: '1/30', label: '1/30' },
  { id: '1/50', label: '1/50' },
  { id: '1/100', label: '1/100' },
];
