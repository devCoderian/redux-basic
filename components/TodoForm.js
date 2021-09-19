import React, {useRef} from 'react'


//컴포넌트
const TodoForm = ({ add }) => {
    const inputRef = useRef();
    return (
        <div>
            <input ref = {inputRef} />
            <button onClick = {click}>추가</button>
        </div>
    );

    function click(){
        add(inputRef.current.value);
    }
}

export default TodoForm; 