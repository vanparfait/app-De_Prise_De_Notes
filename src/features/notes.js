import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: undefined,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotesFromApi: (state, action) => {
      state.list = action.payload;
    },
  },
});

export function getNotesFromApi(action) {
  return function (dispatch, getState) {
    fetch("/data/notes.json")
      .then((response) => response.json())
      .then((data) => dispatch(addNotesFromApi(data.notes)));
  };
}

export const { addNotesFromApi } = notesSlice.actions;
export default notesSlice.reducer;
