import Link from "next/link";


export default function NotFound(){
    return (
        <div className="text-center">
            <h2 className="font-bold">Not Found</h2>

            <Link href="/">Return Home</Link>
        </div>
    )
}