import { User } from "features/auth/models/User/user.types";
import { create } from "zustand";

interface GlobalStoreState {
  isLoaderVisible: boolean;
  showLoader: () => void;
  hideLoader: () => void;

  user: User | undefined;
  accessToken: string | undefined;
  setUser: (user: User) => void;
  setUserAndAccessToken: (user: User, accessToken: string) => void;
}

export const useGlobalStore = create<GlobalStoreState>((set) => ({
  isLoaderVisible: false,
  showLoader: () => set({ isLoaderVisible: true }),
  hideLoader: () => set({ isLoaderVisible: false }),
  user: undefined,
  accessToken: undefined,
  setUser: (user) => set({ user }),
  setUserAndAccessToken: (user, accessToken) => set({ user, accessToken }),
}));
