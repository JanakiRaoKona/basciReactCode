

const heading = React.createElement("h1", { class: "heading" }, "Hello World React");

console.log(heading); // ReactObject => craeteRoot => render =>htmlElement

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
