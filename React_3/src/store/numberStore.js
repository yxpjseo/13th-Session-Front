import { create } from "zustand";

const useNumberStore = create((set) => ({
  number: 13,

  increase: () => set((state) => ({ number: state.number + 1 })),
  decrease: () => set((state) => ({ number: state.number - 1 })),
  reset: () => set({ number: 13 }),
}));

export default useNumberStore;
