import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./hero/index";
import aboutUsReducer from "./about_us/index";
import photoReducer from "./photo/index"
import placesReducer from "./places/index"
import blogReducer from "./blog/index"
import contactReducer from "./contact/index"

export const store = configureStore({
    reducer: {
        hero: heroReducer ,
        aboutUs : aboutUsReducer ,
        photo : photoReducer ,
        places : placesReducer,
        blog : blogReducer ,
        contact : contactReducer
    }
});
