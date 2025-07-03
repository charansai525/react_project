import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css"
import { Sidebar } from "../Login/Sidebar";
import Logo from '../../assets/Logo.jpeg'
// import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {




    return (
        <div className=" text-2xl flex  justify-between items-center w-full  p-3 gap-4 shadow-2xl shadow-grey-700  ">
            <div className="text-3xl  ">

                <NavLink ><h1 className="w-20 rounded-xl bg-orange-400  "><img src={Logo} alt="" /></h1></NavLink>
            </div>
            <div className=" flex text-center justify-center gap-2 w-ful hidden sm:block ">

                <ul className=" list-none  flex justify-center text-center gap-5">
                    <li>
                        <NavLink className={({ isActive }) =>
                            `duration-200 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"} `
                        }

                            to='/' >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}
                            to='/About'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            `duration-200 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"} `
                        } to='/Contact'> Contact

                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) =>
                            `duration-200 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"} `
                        } to='/User'>Users</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            `duration-200 ${isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"} `



                        } to='/Github'> Github

                        </NavLink>
                    </li>



                </ul>
            </div>

            <div>

                <NavLink to='/Login' className={({ isActive }) => `
                        ${isActive ? "text-white" : "text-grey-700"} hover:text-white p-3 hidden  border border-1px border-black rounded-2xl  bg-gradient-to-r from-blue-500 to-purple-500 sm:block 

                        `} >Login</NavLink>


                <div className="">
                    <Sidebar />

                    {/* <GiHamburgerMenu /> */}
                </div>




            </div>



        </div>


    )
}