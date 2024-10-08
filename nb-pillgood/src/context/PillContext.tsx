import React, { createContext, ReactNode, useContext, useState } from "react";
import {
  AppStorageData,
  Medication,
  NotificationSettings,
} from "../api/type/types";

const StateContext = createContext<AppStorageData | undefined>(undefined);

const initialState: Omit<AppStorageData, "setPills" | "setNotifications"> = {
  pills: [],
  notifications: [],
};

export const StateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pills, setPills] = useState<Medication[]>(initialState.pills);
  const [notifications, setNotifications] = useState<NotificationSettings[]>(
    initialState.notifications
  );

  return (
    <StateContext.Provider
      value={{ pills, setPills, notifications, setNotifications }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => useContext(StateContext);
