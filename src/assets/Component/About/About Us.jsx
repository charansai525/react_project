import React, { useEffect, useState } from "react";

// import About1 from '../../assets/About1.jpeg';
// import About2 from '../../assets/About2.jpeg';
import About3 from '../../assets/About3.jpeg'
import About4 from '../../assets/About4.jpeg'
import About5 from '../../assets/About5.jpeg';
import About6 from '../../assets/About6.jpeg';
// import About7 from '../../assets/About7.jpeg'
// import About8 from '../../assets/About8.jpeg';

export function About  () {
        const [imageslider , setimageslider] = useState(0);

        const data = [About5 , About6 , About5 , About6]

         function Handleleft(){

            setimageslider(imageslider === data.length-1 ? 0 : imageslider+1 );
        
         }

         function Handleright(){
            setimageslider(imageslider === 0 ? data.length-1: imageslider-1 );

         }

         useEffect(()=>{
              const slidercler =   setInterval(()=>{
                    Handleleft()
                },2000)
                return ()=> clearInterval(slidercler);
                return

         },[imageslider])

    return(
        <>
        <p className="bg-red-800 text-white text-[20px]"><marquee behavior="normal" direction="left to right">  WARNING :   Smoking and  Alcohol is Injurious to health.</marquee></p>

        
        <div className=" w-full h-[400px] flex  justify-center items-center sm:w-full  md:w-full md:h- xl:w-full ">
            <div className="w-full h-full flex justify-center items-center ">
            {/* <button onClick={Handleright} className="bg-red-800 text-3xl m-100" >{"<"}</button> */}
          <img className=" w-auto h-[300px] ml-[10px] flex items-center justify-center sm:w-[800px] md:w-[800px] xl:w-[900px] xl:h-[350px] xl:mr-5xl     rounded-2xl " src={data[imageslider]} alt="Slider_imgs" />
          <div>
            {/* <button onClick={Handleleft} className="bg-red-800 text-3xl ml-50 " >{">"}</button> */}
          </div>
           
            </div>
        </div>


        {/* --------------------   */}
        

        {/* <div className="gap-4">
            <div className=" grid grid-cols-6 grid-rows-2  gap-4">

                <div className="w-50 h-10">
                    <h1>Cocktail</h1>
                  </div>
                  <div>
                    <h1>Wines</h1>
                  </div>
                  <div>
                    <h1></h1>
                  </div>
               

            </div>
        </div> */}


        <div className="w-full h-full ">
          <div className="text-3xl m-4">
            <h1 className="underline underline-offeset-2">About Us - </h1>

          </div>
          <div className="text-[20px] m-3">
            <h3 className="text-center">A thousand different brands from all over the world, with their own unique flavour and taste.</h3>
            <div className="text-center m-4 text-2xl">
              <h1>"All under one name"</h1>

            </div>

          <div className="">
            <p className="m-3">Originally, founded in 1970,Liquidz is recognized as one of the foremost family owned brand in the country.it all began with Mr.sani , the originator and a mechanical engineer who started up with the first store at siom,Mumbai in 1973.</p>
            
            <p className="m-3"> Today sani group has 50 plus  stores across various sphrences incluinghigh streets, malls and airports which is now spearheaded by his two Arvind and Kavitha. This success is the outcome of unwavering pratices to honor traditional values, a passion for quality, and a respect for mature, finr and strong lasting relationship. </p>

            <p className="m-3">With a reach of 50 plus stores and counting this is what is this distinguish Liquids, we've whole city convered from Chuechgate to vasao and Thana to Vashi,we'se set out becoming number onein the country and soons we shall be on everyon's mind globally. </p>

          </div>
                <div className="text-center text-2xl mt-[30px]">
                  <div className="m-2 ">
                    <h1 className=" underline underline-offset-2">As they say, nothing is impossible.</h1>
                    </div>
                  <div>
                    <h1 className="underline underline-offset-2 mb-[100px]">If it's Liquor, it's with Living Liquid</h1>
                  </div>
                </div>
          </div>

        </div>
        </>
    )
}

