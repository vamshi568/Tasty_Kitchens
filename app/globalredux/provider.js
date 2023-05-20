"use client";

import store from "./store";
import { Provider } from "react-redux";
export function Providers({ children }) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
