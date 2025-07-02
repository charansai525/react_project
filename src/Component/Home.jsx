import React from "react";
import cover_page from '../assets/cover_page.jpg';
import Red_label from '../assets/Red label.jpeg';
import Old_monk from '../assets/Old Monk.jpeg';
import Magic_Moment from '../assets/Magic Moment.jpeg';
import Den_Julio from '../assets/Den Julio.jpeg';
import Morpheus from '../assets/Morpheus.jpeg';
import Kendell_Jackson from '../assets/Kendell Jackson.jpeg';
import Jack_Daniels from '../assets/Jack Daniels.jpeg';
import Royal_Green from '../assets/Royal Green.jpeg';

export function Home() {


    return (
        <>

        <p className="bg-red-800 text-white text-[20px]"><marquee behavior="normal" direction="left to right">  WARNING :   Smoking and  Alcohol is Injurious to health.</marquee></p>
            {/* /* ------------------  this is cover image  ---------------------------------------------------------*/}
            <div className=" h-164 w-full  rounded-5xl object-none    text-center justify-center xl:flex items-center ">

                <img className=" w-200  mt-10  object-cover rounded-3xl flex items-center justify-center xl:mt-5 xl:ml-0 lg:ml-30 " src={cover_page} alt="cover page" />

                <div className=" items-center">
                    <h1 className="text-3xl gap-4 text-center h-20 p-5 xl:"> <span className="text-5xl font-bold">G</span>ood Vibes.Great Drinks...</h1>

                    <p className="text-[20px] m-2 mt-5 xl:m-none "> <span className="text-b text-5xl">W</span>elcome to Golden Cash, your destination for premium liquors. Explore a world of rich whiskeys, smooth vodkas, bold rums, and botanical gins, each crafted for an exceptional experience. Our handpicked selection offers aged single malts, crisp vodkas, spiced rums, and artisanal gins, perfect for any occasion. Discover the finest tequilas and mezcals, made from 100% agave for an authentic taste of Mexico. Elevate your cocktails with our luxurious liqueurs, from sweet and creamy to bold and herbal. Whether you prefer sipping neat or mixing the perfect drink, we have something for every palate. Each bottle in our collection reflects quality, tradition, and craftsmanship. Indulge in the finest flavors, sourced from renowned distilleries around the world. Find your perfect pour and experience excellence in every sip. Cheers to great moments with Golden Cash! </p>

                    <button className="border border-1px border-black h-10 w-30 m-10 ml-14 text-1xl bg-black text-white text-center ">Explor More</button>


                </div>

            </div>

            {/* ----------------------------------------- Grid col  && cards--------------------------------------------------------------------- */}

            <div id="cards"  className="mt-150  xl:mt-0 lg:mt-100 " >
                <div className="grid  grid-rows-2 grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:w-full gap-3 h-full w-full size-10 rounded-3xl p-3 ">

                    <div id="card1" className="border border-1px border-black p-10 rounded-3xl m-2-">

                        <div className="     ">
                            <img className="bg-red-500 " src={Red_label} alt="Red label" />
                        </div>

                        <div className="text-center">
                            <h1 className="text-center text-3xl font-bold" >Red Label <span className="font-normal text-sm">( Whisky )</span> </h1>
                            <p className="m-2"><span className="text-2xl text-red-900 font-bold">Tastes:</span> Johnnie Walker Red Label has a bold, smoky taste with spicy and sweet notes,ending in a fiery smooth finish. </p>
                            <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>
                        </div>



                    </div>
                    <div className="border border-1px border-black p-10  rounded-2xl text-center">
                        <div>
                            <img src={Old_monk} alt="Old Monk" />
                        </div>

                        <div className="">
                            <h1 className="text-center text-3xl font-bold m-2">Old Monk  <span className="font-normal text-sm"> ( Rum )</span> </h1>

                            <p> <span className="text-2xl text-red-900 font-bold">Tastes:</span> Old monk has a rich, smooth taste with notes of caramel, vanilla, and warm spices, ending in a lingering sweetness. </p>
                            <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>
                        </div>

                    </div>
                    <div className=" border border-1px border-black p-10 text-center rounded-2xl ">

                    <div >
                        <img src={Magic_Moment} alt="Magic Movement" />
                    </div>

                       <div>
                        <h1 className="text-center text-3xl font-bold m-2">Magic Moment <span className="font-normal text-sm">(Vodka )</span></h1>
                    <p> <span className="text-2xl text-red-900 font-bold">Tastes:</span> Magic Moment tastes smooth,crisp, and subtly sweet, making every sip delightfull.</p>

                    <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>


                    </div>


                    </div>
                    <div className=" border border-1px border-black p-10  rounded-2xl text-center">
                        <div className=" flex  justify-center items-center ">
                            <img className="h-60" src={Den_Julio} alt="Den_julio" />
                        </div>

                        <div>
                        <h1 className="text-center text-3xl font-bold m-2">Den Julio <span className="font-normal text-sm">( Tequila )</span></h1>
                        <p> <span className="text-2xl text-red-900 font-bold">Tastes:</span> Don Julio a smooth,rich taste with notes of caramel, vanilla, and subtle spice, finishing with a crisp agave flavor. </p>
                    <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>

                        </div>

                    </div>
                    <div className=" border border-1px border-black p-10 text-center rounded-2xl">
                        <div className="">
                            <img src={Morpheus} alt="Morpheus" />
                        </div>

                        <div>
                        <h1 className="text-center text-3xl font-bold m-2">Morpheus <span className="font-normal text-sm">( Brandy )</span></h1>
                        <p className="m-2"><span className="text-2xl text-red-900 font-bold">Tastes:</span> Morpheus has a rich, smooth taste with notes a dried fruits, caramel,vanilla,and a hit of oak, delivering a warm and lingering finish </p>
                    <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>

                        </div>

                    </div>

                    <div className="border border-1px border-black  p-10 text-center rounded-2xl ">
                        <div className="flex items-center justify-center ">
                            <img className="h-48" src={Kendell_Jackson} alt="kendell Jackson" />
                        </div>

                        <div>
                        <h1 className="text-center text-3xl font-bold m-2">Kendell Jackson <span className="font-normal text-sm">(Wine)</span></h1>
                        <p><span className="text-2xl text-red-900 font-bold">Tastes:</span> Kandal Jackson are Known for their rich, smooth taste with balanced acidity, featuring notes of ripe fruit, oak and vanilla </p>
                    <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>
                       
                        </div>

                    </div>
                
                
                    <div className=" border border-1px border-black p-10 rounded-2xl text-center">

                            <div >
                            <img className="h-60" src={Jack_Daniels} alt="" />
                            </div>

                            <div>
                        <h1 className="text-center text-3xl font-bold m-2">Jack Deniels <span className="font-normal text-sm">( Whisky )</span></h1>
                            <p><span className="text-2xl text-red-900 font-bold">Tastes:</span> Jack Daniels has a smooth, slightly sweet taste with notes of caramel, vanilla, toasted oak, and ahint of splice </p>
                            <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>

                            </div>

                    </div>
                    <div className=" border border-1px border-black p-10 rounded-2xl text-center ">

                    <div>
                        <img className="h-60" src={Royal_Green} alt="" />
                    </div>
                        
                <div>
                <h1 className="text-center text-3xl font-bold m-2">Royal Green <span className="font-normal text-sm">( Whisky )</span></h1>
                <p><span className="text-2xl text-red-900 font-bold">Tastes:</span> Royal Green  has a smooth,mellow taste with notes of honey, oak, and subtle spice, offering a warm and balanced finish  </p>
                <button className="text-2xl bg-black text-white w-30 h-13 rounded-2xl mt-10">Buy Now</button>

                </div>

                    </div>


                </div>

            </div>

        </>
    )
}