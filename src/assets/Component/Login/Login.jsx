import React from 'react';


export function Login(){

    return(
        <>
        <div  className='flex  items-center justify-center '>
                
            <form action="" className='w-100 h-130 bg-white-00 m-[50px] shadow-2xl rounded-2xl border border-black-100 '>
                <h1 className='text-5xl text-center p-4'>LogIn</h1>
                <div className='text-2xl text-center'>
                    <input className='border-b-2 m-[20px] mt-[70px]  ' type="text" placeholder='Username' required /><br />
                    <input type="password" className='border-b-2 m-[20px] '  placeholder='Password' required />

                    <button className='border w-40 mt-7  items-center bg-gradient-to-r from-blue-500 to-purple-500'>Login</button>

                </div>
                <div className='text-center'>

                <h1 className='text-center m-5 text-1xl'>Forgot <span className='text-blue-500'> Password </span> ? </h1>
                <h1>Don't hava an account ? <span className='text-blue-500'>Sign Up</span></h1>
                </div>
                
            </form>
              

        </div>
        </>
    )
}