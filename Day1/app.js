const element = React.createElement("h1", {}, "Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root'));  Doesn't work directly if using react 18

const Reactroots = ReactDOM.createRoot(document.getElementById("root"));
Reactroots.render(element);

// render basically means on clicking a button, UI changes

// Dynamic data - changes freaquently, brought directly from the main server. like preference, data, likes etc. and the user for the first time when requires data from the main server, The CDN, close servers brings the data to the user and stores in themselves
// Static data - delivered by the closest servers, CDNs.
