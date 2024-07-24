import { User } from "features/auth/models/User/user.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalStoreState {
  isLoaderVisible: boolean;
  showLoader: () => void;
  hideLoader: () => void;

  user: User | undefined;
  accessToken: string | undefined;
  setUser: (user: User) => void;
  setUserAndAccessToken: (user: User, accessToken: string) => void;
  logoutUser: () => void;

  isUserCompanyCreated?: boolean;
  setIsUserCompanyCreated: (isUserCompanyCreated: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreState>()(
  persist(
    (set) => ({
      isLoaderVisible: false,
      showLoader: () => set({ isLoaderVisible: true }),
      hideLoader: () => set({ isLoaderVisible: false }),
      user: undefined,
      accessToken: undefined,
      setUser: (user) => set({ user }),
      setUserAndAccessToken: (user, accessToken) => set({ user, accessToken }),
      logoutUser: () => set({ user: undefined, accessToken: undefined }),
      isUserCompanyCreated: undefined,
      setIsUserCompanyCreated: (isUserCompanyCreated) =>
        set({ isUserCompanyCreated }),
    }),
    {
      name: "global-store", // unique name
      getStorage: () => localStorage, // use local getStorage
    }
  )
);
