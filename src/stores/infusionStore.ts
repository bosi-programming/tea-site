import { StateCreator, create } from 'zustand';

export interface IInfusionStore {
  grams: number | null;
  infusionsTime: number[] | null;
  totalInfusions: number | null;
  setGrams: (grams: number) => void;
  setInfusionsTime: (infusionsTime: number[]) => void;
}

export const infusionStoreCreator: StateCreator<IInfusionStore> = (set) => ({
  grams: null,
  infusionsTime: null,
  totalInfusions: null,
  setGrams: (grams: number) => set(() => ({ grams })),
  setInfusionsTime: (infusionsTime: number[]) =>
    set(() => ({ infusionsTime, totalInfusions: infusionsTime.length })),
});

export const useInfusionStore = create(infusionStoreCreator);
