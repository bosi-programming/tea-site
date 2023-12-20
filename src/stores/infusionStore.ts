import { StateCreator, create } from 'zustand';

export interface IInfusionStore {
  grams: number | null;
  infusionsTime: number[] | null;
  totalInfusions: number | null;
  hideForm: boolean;
  setGrams: (grams: number) => void;
  setInfusionsTime: (infusionsTime: number[]) => void;
  setHideForm: (hideForm: boolean) => void;
}

export const infusionStoreCreator: StateCreator<IInfusionStore> = (set) => ({
  grams: null,
  infusionsTime: null,
  totalInfusions: null,
  hideForm: false,
  setGrams: (grams: number) => set(() => ({ grams })),
  setInfusionsTime: (infusionsTime: number[]) =>
    set(() => ({ infusionsTime, totalInfusions: infusionsTime.length })),
  setHideForm: (hideForm: boolean) => set(() => ({ hideForm })),
});

export const useInfusionStore = create(infusionStoreCreator);
