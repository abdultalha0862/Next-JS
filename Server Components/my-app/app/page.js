import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from "fs/promises"


export default function Home() {

  console.log("You are Awesome");
  let a= fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())
  })
  
  return (
    <div>
      <Navbar/>
      I am a component
    </div>
  );
}
