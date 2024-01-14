import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // Redux toolkit uses Immer Behind the Scenes
        addItem: (state,action)=>{
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // console.log(state);
            // console.log(current(state));
            // state = [];
            // console.log(state);
            
            // RTK - either Mutate the existing state or return a new state.
            //state.items.length = 0; // []

            return { items:[] } ; // this new object will be replaced inside original state
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer