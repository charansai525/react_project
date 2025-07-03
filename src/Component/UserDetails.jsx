import React from "react";

import {  NavLink, useParams } from "react-router-dom";
import { Header } from "./Header/Header";


export function UserDetails (){

    const parems = useParams();
    console.log(parems);
    

   <h1>UserDetails Pages</h1>

    return(
        <div>
          
            <Header/>
            <h1>This is a user</h1>
            <h1>User id is {parems.id}</h1>
            <NavLink to = "/User">Back</NavLink>
            
            

         

        </div>
    )
}