import React from "react";

import { NavLink } from "react-router-dom";

 function Users (){

    let userData = [

        {id:1,name:'Anil'},
        {id:2,name:'Suma'},
        {id:3,name:'King'},
        {id:4,name:'Ajith'},
        {id:5,name:'Kalyan'},
        {id:6,name:'Pure'},

    ]

    return(
        <div>

            <h1>This is a user</h1>
            
            

            {
                userData.map((items) =>{
                    return(
                        <>
                        <h1 className="px-[40px] m-[20px] text-orange-500 " ><NavLink to= {"/User/" + items.id}>  {items.name} </NavLink> </h1>
                        
                            </>
                    )

} )
}

        </div>
    )
}

export default Users;