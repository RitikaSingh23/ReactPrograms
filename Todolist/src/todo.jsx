import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addtotask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload);
        },
        deletetask:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload);
        },
        completetask:(state,actions)=>{
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].status="complete"
                }
            }
        },
        incompletetask:(state,actions)=>{
            for(var i=0; i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload)
                {
                    state.task[i].status="incomplete"
                }
            }
        }
    }
})
export const {addtotask,deletetask,completetask,incompletetask}=todoSlice.actions;
export default todoSlice.reducer;