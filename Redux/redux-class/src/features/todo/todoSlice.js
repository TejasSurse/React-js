// Reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{ id : "abc", task : "demo-task", isDone : false}],

};

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                task : action.payload,
                isDone : false,
            }
            state.todos.push(newTodo);  //  Direct Mutation // Simpler then react 
        }, 
        deleteTodo : (state, action) =>{
          state.todos =   state.todos.filter((todo) => todo.id != action.payload);
        },
        markAsDone : (state, action)=>{
            // action.payload
            state.todos = state.todos.map((todo)=>{
               if(todo.id === action.payload){
                todo.isDone = true;
                }
            })
        }
    }

});


export default todoSlice.reducer;