import create from "zustand";

interface IuseSidebar {
  isOpen: boolean;
  action: (isOpen: boolean) => void;
}

const useSidebarStore = create<IuseSidebar>((set) => ({
  isOpen: false,
  action: (isOpen: boolean) => set({ isOpen: !isOpen }),
}));

export default useSidebarStore;
