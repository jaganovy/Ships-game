import React, { useReducer, useRef, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import { AddTask } from './Components/AddTask';

// asdasd

const TaskApp: React.FC = () => {
 
  // const [tasks, dispatch] = useReducer(tasksReducer, [])
 
  return (
    <div>
      <AddTask>
          {(text, setText) => (
            <div>
              {text}

              <button onClick={() => setText(text)}>
               set text
              </button>
            </div>
          )}
        </AddTask>
    </div>

  )
}





export default TaskApp;
