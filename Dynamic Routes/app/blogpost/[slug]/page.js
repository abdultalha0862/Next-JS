export default function Page({params}){

    let lang=["html","css","js"];

    if(lang.includes(params.slug)){
        return <div> My post : {params.slug}</div>
    }
    else{
         return <div> Post Not Found </div>
    }
    // return <div>My Post:{params.slug}</div>
}