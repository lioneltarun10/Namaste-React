import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should render header component with login button",() =>{

render(
<BrowserRouter>
    <Provider store={appStore}>
         <Header />
    </Provider>
</BrowserRouter>
)

const loginButton = screen.getByRole("button",{name:"Login"})
// const loginButton = screen.getByText("Login")

expect(loginButton).toBeInTheDocument()

})

it("should render header component with cart items 0",() =>{

    render(
    <BrowserRouter>
        <Provider store={appStore}>
             <Header />
        </Provider>
    </BrowserRouter>
    )
    
    const cartItems = screen.getByText("Cart (0)")
    // const loginButton = screen.getByText("Login")
    
    expect(cartItems).toBeInTheDocument()
    
    })

    it("should render header component with a cart item",() =>{

        render(
        <BrowserRouter>
            <Provider store={appStore}>
                 <Header />
            </Provider>
        </BrowserRouter>
        )
        
        const cartItems = screen.getByText(/Cart/)
        // const loginButton = screen.getByText("Login")
        
        expect(cartItems).toBeInTheDocument()
        
        })   

        it("should change Login Button to Logout on click",() =>{

            render(
            <BrowserRouter>
                <Provider store={appStore}>
                     <Header />
                </Provider>
            </BrowserRouter>
            )
            
            const loginButton = screen.getByRole("button",{name:"Login"})

            fireEvent.click(loginButton)

            const logoutButton = screen.getByRole("button",{name:"Logout"})

            expect(logoutButton).toBeInTheDocument()
            
            })