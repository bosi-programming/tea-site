import { TConcentration, TStrength } from './App.types';

const BASE_INFUSION_TIMES: Record<TConcentration, number[]> = {
  '1/10': [0, 0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 300, 480, 960],
  '1/15': [0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 300, 480, 960],
  '1/20': [5, 10, 10, 15, 20, 30, 45, 60, 120, 300, 480, 960],
  '1/30': [10, 20, 20, 30, 45, 60, 120, 300, 480, 960],
  '1/50': [30, 60, 120, 300, 480, 960],
  '1/100': [120, 300, 480, 960],
};

export const calculateInfusionTime = (strength: TStrength, concentration: TConcentration) => {
  const strengthToValue = {
    weakest: 0,
    weak: 1,
    normal: 1.5,
    strong: 2,
    strongest: 2.5,
  };
  const baseInfusionTimes = BASE_INFUSION_TIMES[concentration].slice(strengthToValue[strength] * 2);
  return baseInfusionTimes;
}

export const CONCENTRATIONS = [
  { id: '1/10', label: '1/10' },
  { id: '1/15', label: '1/15' },
  { id: '1/20', label: '1/20' },
  { id: '1/30', label: '1/30' },
  { id: '1/50', label: '1/50' },
  { id: '1/100', label: '1/100' },
];
