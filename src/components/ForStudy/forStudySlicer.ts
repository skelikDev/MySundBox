import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {channels, listForStudy} from "../Pages/listForStudy";

export interface ICategories {
    category: string,
    array: string[],
    isOpen: boolean
}
export interface  IChannels {
    category: string,
    array: string[],
    isOpen: boolean
}
const initialState: {channels: IChannels[], categories: ICategories[]} = { channels: channels, categories: listForStudy}


export const forStudySlice = createSlice({
    name: 'forStudy',
    initialState,
    reducers: {
        isOpenAction: (state, action:PayloadAction<string>) => {
            state.categories.forEach(el=> {
                if (el.category===action.payload){
                    el.isOpen=!el.isOpen
                } else {
                    el.isOpen= false
                }
            })
            state.channels.forEach(el=> {
                if (el.category===action.payload){
                    el.isOpen=!el.isOpen
                } else {
                    el.isOpen= false
                }
            })
        },
        decrement: (state) => {
            state=state
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state=state
        },
    },
})

// Action creators are generated for each case reducer function
export const { isOpenAction, decrement, incrementByAmount } = forStudySlice.actions

export default forStudySlice.reducer