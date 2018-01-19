import { render } from "lit-html/lib/lit-extended";
import { store } from "./store";
import { component } from "./component";

store.subscribe(() => {
  const update = e => store.dispatch({ type: "=D", payload: e.target.value });
  render(component(store.getState(), update), document.body);
});

store.dispatch({ type: "=D", payload: "World" });
