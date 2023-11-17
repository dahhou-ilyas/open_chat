"use client"
import { type } from 'os'
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
        fetch("http://localhost:3000/api/users").then(res=>{
            res.json().then(data=>{
                setUsers(data)
            })
        })
    },[])
  return (
    <div>
        {
            users.map(user=>{
                return (<div>{user.nom}</div>)
            })
        }
    </div>
  )
}



export default ChatPage