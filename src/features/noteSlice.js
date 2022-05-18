import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://notes-application-2.herokuapp.com/api/v1";

export const getNotes = createAsyncThunk(
  "notes/getNotes",
  async ({ axiosJWT, token }) => {
    const response = await axiosJWT.get(`${URL}/notes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.notes;
  }
);

export const getNotesById = createAsyncThunk(
  "notes/getNotesById",
  async ({ axiosJWT, token, id }) => {
    const response = await axiosJWT.get(`${URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.notes.notes);
    return response.data.notes;
  }
);

export const addNotes = createAsyncThunk(
  "notes/addNotes",
  async ({ token, note }) => {
    try {
      let axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let postData = {
        note,
        date: new Date().toISOString(),
      };
      const response = await axios.post(`${URL}/login`, postData, axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteNotes = createAsyncThunk(
  "notes/deleteNotes",
  async ({ token, id }) => {
    const response = await axios.delete(`${URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const updateNotes = createAsyncThunk(
  "notes/updateNotes",
  async ({ token, id, note }) => {
    let axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let newNotes = {
      note,
      date: new Date().toISOString(),
    };
    const response = await axios.put(
      `${URL}/notes/${id}`,
      newNotes,
      axiosConfig
    );
    return response.data;
  }
);

const noteEntity = createEntityAdapter({
  selectId: (note) => note._id,
});

const noteSlice = createSlice({
  name: "note",
  initialState: noteEntity.getInitialState(),
  extraReducers: {
    [getNotes.fulfilled]: (state, action) => {
      noteEntity.setAll(state, action.payload);
    },
    [getNotesById.fulfilled]: (state, action) => {
      noteEntity.setOne(state, action.payload);
    },
    [addNotes.fulfilled]: (state, action) => {
      noteEntity.addOne(state, action.payload);
    },
    [deleteNotes.fulfilled]: (state, action) => {
      noteEntity.removeOne(state, action.payload);
    },
    [updateNotes.fulfilled]: (state, action) => {
      noteEntity.updateOne(state, {
        _id: action.payload._id,
        updates: action.payload,
      });
    },
  },
});

export const noteSelector = noteEntity.getSelectors((state) => state.note);
export default noteSlice.reducer;
