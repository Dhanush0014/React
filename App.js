const parent = React.createElement("div", {}, [
  React.createElement("h1", { id:"heading" }, "Introduction to advanced react concept"),
  React.createElement("h2", {}, "Welcome")
]);

// React.createElemet is similar to document.createElement
// in the first argument provide what tag need to be created.
// in the second argument provide the atrributes.
// in the thrid argument provide the content need to be rendered.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
