import { createStore } from "redux";

const store = createStore((_, { payload }) => payload);

export { store };
