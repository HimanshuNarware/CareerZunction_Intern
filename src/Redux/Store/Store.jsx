import { configureStore } from "@reduxjs/toolkit";
import WishlistReducer from "../Slice/WishlistSlice";


const store = configureStore({
    reducer:{
        Wishlist:WishlistReducer,
    },
});

export default store;