import React from 'react';

interface IPlayer {
    name: 'sssd',
    age: 55
}

interface TextInputProps {
   state: string,
   stateChange: (v: string) => void
   list: Array<string>
}

const TextInput: React.FC<TextInputProps> = ({ state, stateChange, list }) => {
    return <div>
            <input value={state} onChange={(e) => stateChange(e.target.value)}/> 
            <p>{state}</p>
            {list.map(element => <h4>{element}</h4>)}
        <br />
       
    </div>
}

export default TextInput