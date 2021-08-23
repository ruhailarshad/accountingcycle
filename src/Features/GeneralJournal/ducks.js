import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {postGeneralEntry} from '../../services';

const initialState = {
    generalEntries: [],
    loading: false,
};

export const postGeneralEntryAction =  createAsyncThunk(
    'general-journal/post-entry',
    async (payload, thunkAPI) => {
        const res = await postGeneralEntry({
            debitAmount: 100,
            accountType: 'Asset',  
            accountTitle: 'Cash',
            transactionId: 'jkashdkjh-asjdakjshdkjashd-298374-asd',
        })
        console.log('res', res);
        return res.data;
    }
);

export const {actions, reducer} = createSlice({
    name: 'general-journal',
    initialState,
    reducers: {
        getGJListRequest: (state, {payload: {data}}) => {
          state.loading = true;
        },
        getGJListSuccess: (state, {payload: {data}}) => {
            state.loading = false;
            state.generalEntries = data;
        },
        getGJListError: (state, {payload: {data}}) => {
            state.loading = false;
            state.generalEntries = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postGeneralEntryAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(postGeneralEntryAction.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
        });
        builder.addCase(postGeneralEntryAction.rejected, (state, action) => {
            debugger;
            state.loading = false;
        });
    }
})