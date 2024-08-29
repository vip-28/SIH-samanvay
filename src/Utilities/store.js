import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./projectDataSlice";
import QuerySlice from "./queryDataSlice";

const store = configureStore({
    reducer:{
        projectData:ProjectSlice,
        queryData:QuerySlice
                                

    }
});

export default store;
