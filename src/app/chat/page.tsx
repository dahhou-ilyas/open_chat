"use client"
import React, { useEffect, useState } from 'react'

type Props = {}
type User={
    _id:string
    nom:string
    prenom:string
    socketid:string
}


const ChatPage = (props: Props) => {
    const [users,setUsers]=useState<User[]>([])
    useEffect(()=>{
        fetch("/api/users").then(res=>{
            res.json().then(data=>{
                setUsers(data)
            })
        })
    },[])
  return (
    <div>
        {
            users.map(user=>{
                return (<div key={user._id}>{user.nom}</div>)
            })
        }
    </div>
  )
}



export default ChatPage