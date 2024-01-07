import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location: "Default Location",
                
            }
        }
        //console.log(props);
        // console.log(this.props.name + " child constructor");
    }

    componentDidMount(){

        this.timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000)
        // console.log(this.props.name + " child Component Did Mount");

    }

    componentDidUpdate(prevProps,prevState){

        if(this.state.count != prevState.count){
             //code
        }

        if(this.state.count2 != prevState.count2){
            //code
        }

        // console.log("Component Did Update");
    }

    componentWillUnmount(){
        // console.log("Component unmounted");
        clearInterval(this.timer)
    }


    render(){
        //  console.log(this.props.name + " child render");
     const {name,location,avatar_url} = this.state.userInfo
      
        //debugger;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h2>Location : {location?location:"India"}</h2>
                <h2>Contact : @tarun</h2>
            </div>
        )
    }
}

export default UserClass