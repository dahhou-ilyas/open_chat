"use client"
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'


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
    const [chat,setChat]=useState("")
    const [discusion,setDiscusion]=useState<string[]>([])
    const socketid = localStorage.getItem('socketid');
    console.log(socketid);
    useEffect(()=>{
        fetch("/api/users").then(res=>{
            res.json().then(data=>{
                setUsers(data)
            })
        })
    },[])


    function handelSubmite(e:any){
        e.preventDefault();
        if(chat == "") {
            return
        }
        setDiscusion(prev=>{
            return [...prev,chat]
        })
        // const socket=io('http://localhost:3000',{query:}).
        setChat('')
        
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
                <div>
                    {
                        discusion.map((disc,index)=>{
                            return (
                                <div key={index}>
                                    <p>{disc} from {}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <input type="text" value={chat} onChange={e=>setChat(e.target.value)} className='text-black absolute bottom-0 w-[85%]' />
                <button type='submit' className='absolute bottom-0 right-0 w-[15%] bg-white/25'>envoi</button>
            </form>
        </div>
    </div>
  )
}



export default ChatPage