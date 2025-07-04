import Image from "next/image";
import { cache } from "react";

export default async function Home() {
  let data = await fetch("https://api.vercel.app/blog",{cache:"no-store"});
  let post = await data.json();

  return (
    <ul>
      {post.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// export const dynamic="force-dynamic"
