

import { create } from 'zustand';

interface RecipeStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRecipeModal = create<RecipeStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRecipeModal;