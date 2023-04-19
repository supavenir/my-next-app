import UIList from "@/components/UIList";
import {getUsers} from "@/pages/api/User";
import React, {useEffect, useState} from "react";

function Users(){
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then((response)=>{
            setUsers(response);
        })
    });
    return (
        <>
            <h1>Users</h1>
            <UIList list={users} callback={(user)=>user.username}></UIList>
        </>
    )
}

export default Users;