import React,{useState} from 'react';

export const CounterApp = ()=>{
    const [state,setState]=useState({
        counter1:20,
        counter2:30,
        counter3:50
    });
    const {counter1,counter2}=state;
    return(
     <>
     <h1>Counter1 {counter1}</h1>
     <h1>Counter2 {counter2}</h1>
     
     <button
      onClick={()=>{
        setState({...state,counter1:counter1+1,});
      }}
     >+1</button>

     </>
    );
}