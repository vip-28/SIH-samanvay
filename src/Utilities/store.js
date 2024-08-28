import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./projectDataSlice";

const store = configureStore({
    reducer:{
        projectData:ProjectSlice,
                                

    }
});

export default store;
