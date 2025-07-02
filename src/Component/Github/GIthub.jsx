import React, { useEffect, useState } from "react";

export function Github(){
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/charansai525')
        .then(responce=> responce.json())
        .then(data =>{
            console.log(data);
            setdata(data)
            
        })
    },[])
    return(
        <>
         <div className=" ">

        <h1 className="text-center text-3xl m-5xl">Github Followers: {data.followers}</h1>
        <img className=" w-100  flex justify-center align-center " src={data.avatar_url} alt="" />
        </div>
        </>
    )
}