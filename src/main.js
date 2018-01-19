import { render } from "lit-html/lib/lit-extended";
import { store } from "./store";
import { component } from "./component";

/**
 * Patch DOM on state change.
 */
store.subscribe(() => render(component(), document.body));

/**
 * Initialize (start first state change so app mounts).
 */
store.dispatch({ type: "=D", payload: "World" });
