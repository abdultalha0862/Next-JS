"use client"

export default function Home() {

  console.log(`The id is ${process.env.ID}`);
  
  return (
    <div>
      The id is {process.env.ID} and the passowrd is {process.env.SECRET}
    </div>
  );
}
