import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import UserList from "../components/UserList"
import axios from 'axios';
import { getUsersFail, getUsersStart, getUsersSucceess } from "../redux/actions";
export default function UserListContainer(){
    const users = useSelector((state)  => state.users.data)
    const dispatch = useDispatch();

    const getUsers = useCallback(async function getUsers(){
            try{
                dispatch(getUsersStart());
            const res = await axios.get('https://api.github.com/users')
            // console.log(res.data)
            dispatch(getUsersSucceess(res.data));
            }catch(error){
                dispatch(getUsersFail(error));
            }
        },[dispatch])


    return <UserList users = {users} getUsers = {getUsers}/>
} 
