import React from "react";
import  ReactDOM  from "react-dom/client";
/*
*  <div id="parent">
      <div id="child">
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
      </div>
      <div id="child2">
        <h1>Im an h1 tag</h1>
        <h2>Im an h2 tag</h2>
      </div>
   </div>
*
*
*   ReactElement(object) => HTML(Browser Understands)
 */

const parent = React.createElement("div",
          {id:"parent"},
         [React.createElement("div",
         {id:"child"},
         [React.createElement("h1",{id:"parent"},"This is Namaste React"),
         React.createElement("h2",{id:"parent"},"by Tarun")]),
         React.createElement("div",
         {id:"child2"},
         [React.createElement("h1",{id:"parent"},"I'm a h1 tag"),
         React.createElement("h2",{id:"parent"},"I'm a h2 tag")])])

//JSX

// const heading = React.createElement("h1",{
//     id:"heading",
//     xyz: "abc"
// },"Hello World from React!")

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'))
        
root.render(parent)