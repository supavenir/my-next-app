import UIList from "@/components/UIList";
import UserService, {getUsers, User} from "@/pages/api/User";
import React, {useEffect, useState} from "react";
import {Button, Layout} from "antd";
import {CloseOutlined} from "@ant-design/icons";

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
            setUsers([...users,response.data]);
        })
    }
    const deleteUSer = (user:User)=>{
        UserService.delete(user.id).then((response)=>{
            setUsers(users.filter((u)=>u.id !== user.id));
        })
    }
    return (
        <Layout>
                <h1>Users</h1>
                <Button type="primary" onClick={()=>setDisplayForm(true)}>Ajouter un utilisateur</Button>
            {displayForm && <form onSubmit={(event)=>{
                event.preventDefault();
                let user:User = {
                    username: event.target[0].value,
                    password: event.target[1].value,
                    email: event.target[2].value,
                    completeName: event.target[3].value
                } as User;
                addUser(user);
                setDisplayForm(false);
            }
            }>
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="completeName"/>
                    <Button htmlType="submit">Ajouter utilisateur</Button>
                </form>}
                <UIList list={users} callback={(user)=>{
                    return (
                        <>
                        {user.username}
                        <Button shape="circle" icon={<CloseOutlined/>} onClick={()=>deleteUSer(user)}/>
                        </>
                    );
                }}></UIList>
        </Layout>
    )
}

export default Users;