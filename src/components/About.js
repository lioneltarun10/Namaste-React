import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{

    constructor(props){
        super(props);

        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component Did Mount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                
                <User />
                {/* <UserClass name={'first (class)'} location={'Bangalore class'}/> */}
            </div>
        )
    
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
            
//             <UserClass name={'Tarun (class)'} location={'Bangalore class'}/>
//         </div>
//     )
// }

export default About;