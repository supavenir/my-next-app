import UIList from "@/components/UIList";
import UserService, {getUsers, User} from "@/pages/api/User";
import React, {useEffect, useState} from "react";
import {Button, Layout} from "antd";

function Users(){
    let [users,setUsers] = useState<User[]>([]);
    let [displayForm,setDisplayForm] = useState(false);
    useEffect(()=>{
        UserService.getAll().then((response)=>{
            setUsers(response);
        })
    },[]);
    const addUser = (user:User)=>{
        UserService.add(user).then((response)=>{
            setUsers([...users,response]);
        })
    }
    return (
        <Layout>
                <h1>Users</h1>
                <Button type="primary" onClick={()=>setDisplayForm(true)}>Ajouter un utilisateur</Button>
            {displayForm && <form>
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="completeName"/>
                    <Button>Ajouter utilisateur</Button>
                </form>}
                <UIList list={users} callback={(user)=>user.username}></UIList>
        </Layout>
    )
}

export default Users;