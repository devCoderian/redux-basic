import { useEffect } from "react"
export default function UserList({users, getUsers}) {
    useEffect(() =>{
        getUsers();
    },[getUsers]);

    if(users.length === 0){
        return <p>현재 user 없음</p>
    }


    return (
        <ul>
            {users.map((user) => (
                <li key = {user.id}>{user.login}</li>
            ))}
    </ul>
    );
}