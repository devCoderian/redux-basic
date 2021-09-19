import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { useCallback } from 'react';
import { addTodo } from '../redux/actions';
//컨테이너 -> 역할 부분 이어주는 부분

function TodoFormContainer(){
    const dispatch = useDispatch();

    const add = useCallback((text) =>{
        dispatch(addTodo(text))
    },[dispatch])

    return <TodoForm add = {add}/>
}

export default TodoFormContainer;