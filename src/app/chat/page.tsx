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
    const [userSelct,setUserSelct]=useState<String>()
    useEffect(()=>{
        fetch("/api/users").then(res=>{
            res.json().then(data=>{
                setUsers(data)
            })
        })
    },[])

    function handelSubmite(e:any){
        e.preventDefault();
    }
  return (
    <div className='flex flex-row h-[70vh]'>
        <div className='w-[25%]'>
            {
                users.map(user=>{
                    function handleClikc(){
                        setUserSelct(user.socketid)
                    }
                    return (
                        <div onClick={handleClikc} className='border border-black cursor-pointer' key={user._id}>
                            {user.nom} {user.prenom}
                        </div>
                    )
                })
            }
        </div>
        <div className='w-[74%] border relative'>
            <form action="" onSubmit={handelSubmite}>
                <input type="text" className='text-black absolute bottom-0 w-[85%]' />
                <button type='submit' className='absolute bottom-0 right-0 w-[15%] bg-white/25'>envoi</button>
            </form>
        </div>
    </div>
  )
}



export default ChatPage