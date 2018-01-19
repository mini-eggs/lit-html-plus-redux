import { createStore } from "redux";
export const store = createStore((_, { payload }) => payload);
