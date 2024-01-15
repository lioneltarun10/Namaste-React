import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us page test cases",() => {

    // beforeAll(() => {
    //     console.log("Before All");
    // })

    // beforeEach(() => {
    //     console.log("Before Each");
    // })

    // afterAll(() => {
    //     console.log("After All");
    // })

    // afterEach(() => {
    //     console.log("After Each");
    // })

    test("Should load contact us component",() =>{

        render(<Contact />)
       //Querying
        const heading = screen.getByRole("heading")
        //console.log(heading);
        //Assertion
        expect(heading).toBeInTheDocument();
    
    })
    
    test("Should load button inside Contact component",() =>{
    
        render(<Contact />)
        //Querying
        const button = screen.getByText("Submit")
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    })
    
    it("Should load input name inside Contact component",() =>{
    
        render(<Contact />)
        //Querying
        const inputName = screen.getByPlaceholderText("name")
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    
    })
    
    it("Should load 2 input boxes on the Contact component",() => {
    
       render(<Contact />)
      //Querying
       const inputBoxes = screen.getAllByRole("textbox")
    
       console.log(inputBoxes.length); 
    
       expect(inputBoxes.length).toBe(2)
       //expect(inputBoxes.length).not.toBe(3)
    
    
    })


})

