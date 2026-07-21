const element = React.createElement("h1", {id:"first", className:"ME", style: {backgroundColor: "blue", fontSize: "30px"}}, "Hello Coder Army");

const element2 = React.createElement('h4', {id:"s", className:"k", style: {backgroundColor: "green", fontSize: "30px"}}, "Hello Coder Army");
// ReactDOM.render(element,document.getElementById('root'));  Doesn't work directly if using react 18


// render basically means on clicking a button, UI changes

// Dynamic data - changes freaquently, brought directly from the main server. like preference, data, likes etc. and the user for the first time when requires data from the main server, The CDN, close servers brings the data to the user and stores in themselves
// Static data - delivered by the closest servers, CDNs.

const Reactroots = ReactDOM.createRoot(document.getElementById("root"));
Reactroots.render(element);
Reactroots.render(element2);

// Multiple elements can be rendered by constructing an array of the required elements
const div1 = React.createElement('div', {}, [element, element2]);

Reactroots.render(div1);



// Through JSX we can write html syntax in JS

// Bundler: Helps to optimize the code, and bundle the useful code. --- Webpack, parcel


// npm init
// npm install parcel

// npm : Node Package Manager(bs keh sakte hain)

// npm install react, npm install react-dom

// package.json has all the information abouit dependencies
