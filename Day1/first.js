// // Create element through JS

// // const { createElement } = require("react");

// // const header1 = document.createElement('h1');
// // header1.innerText = "Hello There...";
// // header1.style.backgroundColor = "black";
// // header1.style.fontSize = "30px";
// // header1.style.color = "pink";


// const header2 = document.createElement('h2');
// header2.innerText = "This is Shivansh";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// header2.style.color = "blue";


// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2); 



//  Using react

const React = {
    
    createElement: function(tag, styles, children){

        const element = document.createElement(tag);

        if(typeof children === 'object'){
            
            for (let val of children)
                element.append(val);
            
        }
        
        else{
            element.innerText = children;
        }

        
        for (let key in styles){
                element.style[key] = styles[key];
        }

        return element;
    }

}

const ReactDOM = {
    render: function (element, root){
        root.append(element);
    }
}

// React : Object
// ReactDOM : Object


const header1 = React.createElement('h1', {backgroundColor :"blue"}, "Hello Brother");
const header2 = React.createElement('h2', {backgroundColor: "grey", color: "darkgrey"}, "Kaise ho bhai...");


ReactDOM.render(header1, document.getElementById('root'));
ReactDOM.render(header2, document.getElementById('root'));


// Creating an unordered list
// HTML
// CSS
// JS

const l1 = React.createElement('li', {}, "HTML");
const l2 = React.createElement('li', {}, "CSS");
const l3 = React.createElement('li', {}, "JS");



const Ul = React.createElement('ul', {fontSize: "30px", backgroundColor: "aqua", color: "white"}, [l1, l2, l3]);
ReactDOM.render(Ul, document.getElementById('root'));


// React is not exactly but can be called as a JS library used to perform different tasks, by calling prefined functions from the library
// React is JavaScript object.