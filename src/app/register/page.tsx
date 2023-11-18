"use client"
import React, { useState ,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { io } from 'socket.io-client'

type Props = {}

const Register = (props: Props) => {
    const [nom,setNome]=useState("")
    const [prenom,setPrenom]=useState("")
    const [socket,setSocket]=useState<any>(undefined)
    const router = useRouter()

    
    useEffect(()=>{
        const socket=io('http://localhost:3000')
        setSocket(socket)

        return () => {
            socket.disconnect();
        };
        
    },[])
    async function handlerSubmit(e:any){
        e.preventDefault();
        const res=await fetch('/api/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({nom,prenom,socketid:socket.id})
        })
        if(!res.ok){
            return 
        }

        localStorage.setItem('socketid', socket.id);

        setNome("")
        setPrenom('')
        router.push('/chat')
    }

  return (
    <> 
        <div className='text-center mt-5'>
            <h1 className='md:text-7xl lg:text-8xl sm:text-5xl text-3xl inline-block typewriter'>OPEN CHAT</h1>
        </div>
        <div className='flex flex-col gap-y-3 justify-center items-center h-[45vh]' onSubmit={handlerSubmit}>
            <h1 className='font-bold text-lg'>register</h1>
            <form action="" className='flex flex-col gap-y-4 w-[60%] xl:w-[30%] lg:w-[30%]'>
                <input onChange={e=>setNome(e.target.value)} value={nom} type="text" placeholder='nom' className='bg-white/25 h-9 rounded-md text-center'/>
                <input onChange={e=>setPrenom(e.target.value)} value={prenom} type="text" placeholder='prenome' className='bg-white/25 h-9 rounded-md text-center'/>
                <button type='submit' className='border-0 mt-3 w-[27%] m-auto rounded-md bg-white/10 h-9'>Registre</button>
            </form>
        </div>
    </>
  )
}

export default Register