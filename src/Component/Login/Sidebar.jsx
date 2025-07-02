import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export function Sidebar(){
    const [isopen , setisopen] = useState(false)

    const toggleSilder = () =>{
        setisopen(!isopen);
    }
    return(
        <div className="relative sm:hidden ">
            

            <button onClick={toggleSilder} className="sm:hidden text-2xl p-4 ">
      
             <GiHamburgerMenu /> 
            </button>
            
            <div className={`fixed top-0 left-0 mt-[81px] w-64 h-full bg-gray-500  transition-transform transfrom  ${isopen ? 'translate-x-0':"-translate-x-full" }   `}>

        {
            isopen &&(
                
                <div className="">

                    <ul className="p-[0px]  m-[20px] gap-x-5 text-3xl  ">
                    <li className="p-[10px]  hover:bg-red-600">
                        <NavLink to= '/' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700`}
                        
                            >Home</NavLink>
                    </li>
                    <li className="p-[10px]">
                    <NavLink to= '/About' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700 mt-10  `} >
                    
                    About</NavLink>
                    </li>
                    <li className="p-[10px]">
                    <NavLink to= '/Contact' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700  `}
                        
                        >Contact</NavLink>
                    </li>
                    <li className="p-[10px]">

                    <NavLink to= '/User' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700  `}
                        
                        >Users</NavLink>
                    </li>

                    <li className="p-[10px]">

<NavLink to= '/Github' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700  `}
    
    >Github</NavLink>
</li>


                    <li className="p-[20px]">
                    <NavLink to= '/Login' className= {({isActive})=>`${isActive?"text-orange-900": "text-white"}  hover:text-orange-700    `}
                        
                        >Login</NavLink>
                    </li>
                    </ul>
                </div>
            ) 
        }

        </div>
        </div>
    )
}