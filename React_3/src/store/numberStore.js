<<<<<<< HEAD
import React from "react";
import { create } from "zustand";

const numberStore = create((set) => ({
	number: 13,

	increase: () => set((state) => ({ number: state.number + 1 })),
	decrease: () => set((state) => ({ number: state.number - 1 })),
	reset: () => set({ number: 13 }),
}));

export default numberStore;
=======
import { create } from "zustand";

const useNumberStore = create((set) => ({
  number: 13,

  increase: () => set((state) => ({ number: state.number + 1 })),
  decrease: () => set((state) => ({ number: state.number - 1 })),
  reset: () => set({ number: 13 }),
}));

export default useNumberStore;
>>>>>>> e04c3f348ddcebae7ef9c3a55557d8246888ff55
