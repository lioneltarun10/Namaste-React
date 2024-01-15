import  { fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search Res List for burger text input",async () => {
    await act(async () => render(
    <BrowserRouter>
         <Body />
    </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button" , {name:"Search"})

    const searchInput = screen.getByTestId("searchInput")

    // console.log(searchInput);

    fireEvent.change(searchInput,{target:{value:"burger"}})

    fireEvent.click(searchBtn)

    //screen should load 2 restaurant card's
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(3)
    
})


it("Should filter top rated restaurant",async () => {
    await act(async () => render(
    <BrowserRouter>
         <Body />
    </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard")

    expect(cardsBeforeFilter.length).toBe(9)

    const topRatedBtn = screen.getByRole("button",{name: 'Top Rated Restaurants'})
    console.log(topRatedBtn);

    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard")
    console.log(cardsAfterFilter.length);

    expect(cardsAfterFilter.length).toBe(6)

    
})