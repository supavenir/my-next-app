"use client";
import { Inter } from 'next/font/google'
import Hello from "@/components/Hello";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let [title,setTitle] = useState("Hello World");
  return (
    <div>
        <input type="text" placeholder="title" defaultValue={title} onChange={(e)=>{
            setTitle(e.target.value);
        }}/>
       <Hello title={title} subTitle={"Tout le monde"}/>
    </div>
  )
}
