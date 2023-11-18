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
    <div className='flex flex-row'>
        <div className='w-[25%]'>
            {
                users.map(user=>{
                    return (
                        <div className='border border-black cursor-pointer' key={user._id}>
                            {user.nom} {user.prenom}
                        </div>
                    )
                })
            }
        </div>
        <div className='w-[74%]'>boit chat</div>
    </div>
  )
}



export default ChatPage