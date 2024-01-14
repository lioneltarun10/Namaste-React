import React,{lazy,Suspense, useEffect, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


//chunking 
//code splitting
//dynamic bundling
//lazy loading
//on-demand loading
//dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
  // console.log(<Body />);

  
  const [userName,setUserName] = useState();

  // authentication
  useEffect(()=>{
    // make an api call and set username and password
    const data = {
      name:"unnam tarun"
    }

    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
     {/* Default value */}
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      {/* Unnam Tarun */}
  <div className="app">
      <Header />
     
      <Outlet />
  </div>
  </UserContext.Provider>
  </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu />
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ],
    errorElement:<Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(<RouterProvider router={appRouter}/>)