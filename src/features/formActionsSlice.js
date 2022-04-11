const { createSlice } = require("@reduxjs/toolkit")

const initialState = [];

const formActionSlice = createSlice({
    name: 'formActions',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },

        remove: (state, action) => {
            return state.filter((val) => val.id !== action.payload);
        },

        edit: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload.item) {
                    item.name = action.payload.name;
                    item.userName = action.payload.userName;
                }
            });
            
            return state
        },
    }
});

export const {add, remove, edit} = formActionSlice.actions;
export default formActionSlice.reducer;