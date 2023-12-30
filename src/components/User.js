import { useEffect, useState } from "react"

const User = ({name}) =>{

   const [count,setCount] = useState(0)
   const [count2,setCount2] = useState(1)

   useEffect(()=>{
       
    const timer = setInterval(()=>{
        console.log("Namaste React OP");
    },1000)
    console.log("useEffect");

     return ()=>{
          console.log("useEffect return");
          clearInterval(timer)
     }
   },[])

//    async function getUserInfo(){
//     const data = await
//    }
      console.log("render");
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name : {name}</h2>
            <h2>Location : Bangalore</h2>
            <h2>Contact : @tarun</h2>
        </div>
    )
}

export default User