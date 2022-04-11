// After create a store, i have to create a provide to all aplication.
import { configureStore } from "@reduxjs/toolkit";
import formActionsSlice from './features/formActionsSlice';

const store = configureStore({
    reducer: {
        formActions: formActionsSlice,
    },
});

export default store;