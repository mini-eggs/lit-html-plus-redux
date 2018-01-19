const shadow = `
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, 
              rgba(0, 0, 0, 0.12) 0px 1px 4px;`;

const styles = {
  container: `
    padding: 50px;
    background-color: lightblue;
    max-width: 800px;
    margin: 50px auto 0;
    font-family: sans-serif
    line-height: 1.4;
    font-size: 18px;
    border-radius: 4px;
    ${shadow}`,
  title: `
    font-size: 32px;`,
  input: `
    background-color: #f1f1f1;
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
  ${shadow}`,
  image: `
    border-radius: 4px;
    overflow: hidden;
    vertical-align: center;
    ${shadow}`
};

export { styles };
