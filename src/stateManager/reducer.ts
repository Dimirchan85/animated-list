import {createSlice} from "@reduxjs/toolkit";

export interface IState {
    tasks: string[]
}

const initialState : IState = {
    tasks : []
};
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask:(state)=>{
            const task = Math.floor(Math.random()*16777215).toString(16);
            state.tasks.unshift(task)
        },
        removeTask:(state)=>{
            state.tasks.pop();
        }
    }
});


export const { addTask, removeTask } = tasksSlice.actions
export default tasksSlice.reducer