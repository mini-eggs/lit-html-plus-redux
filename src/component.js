import { html } from "lit-html/lib/lit-extended";
import styles from "./styles.css";

const capitalizeWord = s => ( (s = s.split("")), [s.shift().toUpperCase(), ...s].join("") );
const capitalizeSentence = s => s .split(" ") .map(capitalizeWord) .join(" ");

const component = (name, update) => html`
  <div class="test-component">
    <center>
    <h1>Hi ${capitalizeSentence(name)}! =D</h1>
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

export { component };
