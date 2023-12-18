import React from "react";
import  ReactDOM  from "react-dom/client";


const elen = <span>React Element</span>

const Title = () => (
<h1 className="head" tabIndex="1" >
  Namaste React using JSX
  </h1>
  )

const data = 1000  
 
// const HeadingComponent = () =>{
//   return <h1 className="heading">Namaste React Functional Component</h1>
// }

// component composition
const HeadingComponent = () =>( 
  <div id="container">
   {Title()}
<h1 className="heading">Namaste React Functional Component</h1>
  </div>
)


// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(<HeadingComponent />)