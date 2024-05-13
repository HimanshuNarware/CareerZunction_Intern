import { createSlice } from "@reduxjs/toolkit";

const initialState={
    wishlist : [],
}

const WishlistSlice = createSlice({
    name:'Wishlist',
    initialState:initialState,
    reducers:{
        addToWishlist(state,action)
        {
            const{internship_name,company_name,internship_type,duration,link,image,award,description,mode} = action.payload;

            console.log(action.payload)
           
            state.wishlist.push({internship_name,company_name,internship_type,duration,link,image,award,description,mode})

            

            
        },
    },
})

export const {addToWishlist} = WishlistSlice.actions;
export default WishlistSlice.reducer;