"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async ()=>{
    let data= {
      name:"King",
      role:"coder"
    }
    let a=await fetch("api/app",{method:"POST",headers:{"Content-type":"application/json",},
      body:JSON.stringify(data),
    })
    let res=await a.json()
    console.log(res);
    
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Next Js API Routing</h1>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
