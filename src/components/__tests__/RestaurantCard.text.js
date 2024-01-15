import  { render,screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"


it("Should render RestaurantCard component with props data",() => {
    render(<RestaurantCard resData = {MOCK_DATA} />)

   const name =  screen.getByText("La Pino'z Pizza");

   expect(name).toBeInTheDocument();
})


it("Should render RestaurantCard component with promoted Label",() => {
    // Homework - test Higehr Order Component : withPromotedLabel()
})