import { create } from "zustand";

const useProductStore = create((set) => ({
   products: [],
   setProducts: (products) => set({ products }),
   fetchProducts: async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      set({ products: data.products });
   },
}));

export default useProductStore;
