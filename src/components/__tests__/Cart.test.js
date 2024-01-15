import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => 
     Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME)
    })
)

it("Should Load Restaurant Menu Component", async () => {

    await act( async () => render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    <RestaurantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>
    ))

   const accordianHeader = screen.getByText("Authentic Andhra Meals (6)")
   fireEvent.click(accordianHeader)

   const foodItems =  screen.getAllByTestId("food-items")

   expect(foodItems.length).toBe(6)

   expect(screen.getByText("Cart (0)")).toBeInTheDocument();

   const addBtns = screen.getAllByRole("button",{name:"Add +"})

//    console.log(addBtns.length);

  fireEvent.click(addBtns[0])

  const cartCount = screen.getByText("Cart (1)")

  expect(cartCount).toBeInTheDocument();

  fireEvent.click(addBtns[1])

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items").length).toBe(8);

  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))

  expect(screen.getAllByTestId("food-items").length).toBe(6);

  expect(screen.getByText("Cart is empty , Add Items to the Cart")).toBeInTheDocument()



})