import { html } from "lit-html/lib/lit-extended";
import { styles } from "./styles";
import debounce from "lodash/debounce";

const asyncCapitalize = s => {
  s = s.split("");
  s = [s.shift().toUpperCase(), ...s].join("");
  return Promise.resolve(s);
};

const component = (name, update) => html`
  <center style=${styles.container}>
    <h1 style=${styles.title}>Hi ${asyncCapitalize(name)}! =D</h1>
    <p>If this is not your name please enter it below.</p>
    <input style=${styles.input} oninput="${debounce(update, 50)}" autofocus />
    <br/>
    <br/>
    <br/>
    <img style="${styles.image}" src="static/screenshot.png" />
  </center>
`;

export { component };
