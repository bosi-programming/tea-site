import { BASE_INFUSION_TIME } from '@/App.constants';
import { TConcentration, TStrength, TTea } from '@/App.types';
import { StateCreator, create } from 'zustand';

export interface IInfusionStore {
  size: number | string;
  strength: TStrength | null;
  concentration: TConcentration | null;
  teaType: TTea;
  grams: number | null;
  infusionsTime: number[] | null;
  totalInfusions: number | null;
  hideForm: boolean;
  setInfusionsTime: (infusionsTime: number[]) => void;
  setHideForm: (hideForm: boolean) => void;
  handleSetSize: (size: number) => void;
  handleSetStrength: (strength: TStrength) => void;
  handleSetConcentration: (concentration: TConcentration) => void;
  setTeaType: (teaType: TTea) => void;
  clearInfusionStore: () => void;
}

const defaultInfusionStore = {
  size: '',
  teaType: null,
  strength: null,
  concentration: null,
  grams: null,
  infusionsTime: null,
  totalInfusions: null,
  hideForm: false,
};

export const infusionStoreCreator: StateCreator<IInfusionStore> = (set) => ({
  ...defaultInfusionStore,
  setInfusionsTime: (infusionsTime: number[]) =>
    set(() => ({ infusionsTime, totalInfusions: infusionsTime.length })),
  setHideForm: (hideForm: boolean) => set(() => ({ hideForm })),
  handleSetSize: (size: number) =>
    set((state) => ({
      size,
      ...(state.concentration && {
        grams: Math.ceil(
          Number(size) / Number(state.concentration.replace('1/', '')),
        ),
      }),
    })),
  handleSetStrength: (newStrength: TStrength) =>
    set((state) => ({
      strength: newStrength,
      ...(state.concentration && {
        infusionsTime: BASE_INFUSION_TIME[newStrength][state.concentration],
        totalInfusions:
          BASE_INFUSION_TIME[newStrength][state.concentration].length,
      }),
    })),
  handleSetConcentration: (newConcentration: TConcentration) =>
    set((state) => ({
      concentration: newConcentration,
      ...(state.strength && {
        infusionsTime: BASE_INFUSION_TIME[state.strength][newConcentration],
        totalInfusions:
          BASE_INFUSION_TIME[state.strength][newConcentration].length,
      }),
      ...(state.size && {
        grams: Math.ceil(
          Number(state.size) / Number(newConcentration.replace('1/', '')),
        ),
      }),
    })),
  setTeaType: (newTeaType: TTea) =>
    set(() => ({
      teaType: newTeaType,
    })),
  clearInfusionStore: () => set(() => defaultInfusionStore),
});

export const useInfusionStore = create(infusionStoreCreator);
