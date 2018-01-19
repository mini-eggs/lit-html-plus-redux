import { html } from "lit-html/lib/lit-extended";
import { store } from "./store";
import styles from "./styles.css";

/**
 * Utils
 */
const capitalizeWord = s => {
  const characters = s.split("");
  const first = characters.shift();
  const uppercased = first ? first.toUpperCase() : "";
  return [uppercased, ...characters].join("");
};

const capitalizeSentence = s => {
  const characters = s.split(" ");
  const formatted = characters.map(capitalizeWord);
  return formatted.join(" ");
};

/**
 * Actions
 */
const update = e => store.dispatch({ type: "=D", payload: e.target.value });

/**
 * UI
 */
export const component = () => {
  const name = store.getState();
  const formatted = name ? capitalizeSentence(name) : "World";

  return html`
    <div class="test-component">
      <center>
      <h1>Hi ${formatted}! =D</h1>
      <p>If this is not your name please enter it below.</p>
      <input oninput="${update}" autofocus />
      <br/>
      <br/>
      <br/>
      <img src="static/screenshot.png" />=
      </center>
    </div>
    <style>${styles.toString()}</style>
  `;
};
