import React, { Children, ReactElement, ReactNode, useState, useReducer, memo, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

// interface ChildrenType {
//   children: (num: number, text: string) => ReactNode
// }

// const enum REDUCER_ACTION_TYPE {
//   INCREMENT,
//   DECREMENT,
//   NEW_INPUT
// }

// const initState = {count: 0, text: ''}

// type ReducerAction = {
//   type: REDUCER_ACTION_TYPE,
//   payload?: string
// }

// const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
//   switch(action.type){
//     case REDUCER_ACTION_TYPE.INCREMENT:
//       return {...state, count: state.count + 1}
//     case REDUCER_ACTION_TYPE.DECREMENT:
//       return {...state, count: state.count - 1}
//     case REDUCER_ACTION_TYPE.NEW_INPUT:
//       return {...state, text: action.payload ?? ''}
//     default: 
//     throw new Error('err')
//   }
// }



// const Counter = ({children}: ChildrenType ) => {
//   const [counter, dispatch] = useReducer(reducer, initState)
 
//   const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
//   const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: REDUCER_ACTION_TYPE.NEW_INPUT,
//       payload: e.target.value
//     })
//   }
//   return <>
//     <h1>{children(counter.count, counter.text)}</h1>
   
//     <input type="text" onChange={handleChange}/>
//     <button onClick={increment}>increment</button>
//   </>
// }


// const App = () => {
//   return <Counter>{ (num: number, text: string) => <>Counter: {num}{text}</>}</Counter>
// }




// export default App;




// const initialState = {text: ''}

// interface ChildrenType {
//   children: (text: string) => ReactNode
// }

// const enum REDUCER_ACTION_TYPE {
//   ADD_TEXT,
//   DELETE_TEXT
// }

// type ReducerAction {
//   type: REDUCER_ACTION_TYPE
// }

// const reducer = (state: typeof initialState, action: )

// const ChildComponent = ({children}: ChildrenType) => {
//   const [text, setText] = useReducer( ,initialState)
// }

interface ChildTypes {
  counterLocal: number
}


const App = () => {


  const [counterGlobal,setCounterGlobal] = useState(0)
  const [counterLocal,setCounterLocal] = useState(0)

  const incrementLocal = () => {
    setCounterLocal(counterLocal+1)
  }
  const incrementGlobal = () => {
    setCounterGlobal(counterGlobal+1)
  }

  useEffect(() => {
    console.log('local update')
  },[counterLocal])
  
  return (
    <div className='App'>
      <Child counterLocal={counterLocal} />
      global: {counterGlobal}
      <button onClick={incrementLocal}>increment local</button>
      <button onClick={incrementGlobal}>increment global</button>
    </div>
  )
}

// const Child = ({counterLocal}: ChildTypes) => {
//   console.log('child render')
//   return (
//     <div>
//       {counterLocal}
//     </div>
//   )

// }

const Child = memo(({counterLocal}: ChildTypes) => {
  console.log('here')

  return (
    <div>
      {counterLocal}
    </div>
  )

})
export default App;








