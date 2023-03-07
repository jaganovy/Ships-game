import React, {useState} from "react";

interface Props {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    children: (text: string, setText: React.Dispatch<React.SetStateAction<string | undefined>>) => JSX.Element | null
}

const asd: string = 'a'

export const AddTask: React.FC<Props> = ({handleChange, children}) => {
    const [text, setText] = useState<string | undefined>('')

    return <div className="taskHandler">
            {/* <input 
            type="text"
            placeholder="add task"
            value={text}
            onChange={handleChange}
            /> */}
            {/* {children(text, setText)} */}
        </div>
}