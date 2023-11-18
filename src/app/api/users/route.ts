import { NextResponse } from "next/server";
import { connect } from "../../../../lib/mongodb";

export async function GET(){
    const {Chat}=await connect();
    return NextResponse.json(await Chat.find({}))
}

export async function POST(request:Request){
    const {nom,prenom,socketid}=await request.json();
    console.log(socketid);
    if(!nom || !prenom || !socketid) return NextResponse.json({'message':"Missing required data"});
    const {Chat}=await connect();
    const suerChat=Chat.create({
        nom:nom,
        prenom:prenom,
        socketid:socketid
    }).catch(e=>{
        NextResponse.json({'message':"Error avec mongodb"})
    })

    return NextResponse.json(suerChat)
}