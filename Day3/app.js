import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1", {id:"first", key: "heading1", className:"ME", style: {backgroundColor: "blue", fontSize: "30px"}}, "Hello Coder Army");

// const element2 = React.createElement('h2', {id:"s", key: "heading2", className:"k", style: {backgroundColor: "green", fontSize: "30px"}}, "Hello Coder Army");



// Js element changes to html after we render it otherwise it stays JS object
// React.createElement() => "React" => react element(JSobject) => "Render" => HTML edlement



// const Reactroots = ReactDOM.createRoot(document.getElementById("root"));
// Reactroots.render(element);
// Reactroots.render(element2);

// const newElement = <h1>Hello coder army</h1> // This is JSX code not React
// babel converts jsx code to react code 

// JSX => "babel" => React.createElement() => "React" => react element(JSobject) => "Render" => HTML element
// JSX react ka part nahi hai 




// Reactroots.render(newElement);

// const div1 = React.createElement('div', {}, [element, element2]);

// Reactroots.render(div1);

 
const name = "Shivansh";

const obj = {
    age: 20,
    city: "Kiratpur"
}

const obj2 ={
    backgroundColor: "blue",
    color: "yellow"
}


// React element
const newElement = (
    <>
        <h1 id="first" className="sk">Hello coder army, you are {obj.age}</h1>

        <h2 style={obj2}>Kya kar rahe ho? {"theek hi ho"} {121}</h2>
        
        {/* Important note while doing inline css */}
        
        <h3 style={{color: "purple", fontSize: "30px"}}>style in inline CSS takes object, So either make an object element and introduce it to style or Use double curly brackets</h3>
    </>
)


// React Component 
// function based component

function greet(){
    return <h1>Aur bhai, kya haal chaal</h1>
}

const newElement2 = greet();

const Reactroots = ReactDOM.createRoot(document.getElementById("root"));
const ReactROOTS = ReactDOM.createRoot(document.getElementById("food"));

Reactroots.render(<>{newElement} {newElement2}</>);
ReactROOTS.render(greet())


// JSX: JavaScript XML: HTML code direct JS ke andar likh sakte hain
