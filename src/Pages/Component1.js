
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTigerHead } from "react-icons/gi";
import { GiCaveman } from "react-icons/gi";
import { GiSwordwoman } from "react-icons/gi";
import { TbMoodBoy } from "react-icons/tb";
import { CgGirl } from "react-icons/cg";

import Image from 'next/image'
import girlwinterware from "./../Assets/girlwinterware.jpg";
import ladywinterware from "./../Assets/ladywinterware.jpg";
import menwinterware from "./../Assets/menwinterware.jpg";
import boywinterware from "./../Assets/boywinterware.jpg";
import boystlishware from "./../Assets/boystlishware.jpg";
import girlstylishware from "./../Assets/girlstylishware.jpg";
import ladystylishware from "./../Assets/ladystylishware.jpg";
import menstylishware from "./../Assets/menstylishware.jpg";


const Component1 = () => {
    return (
        <div className='flex flex-col h-screen overflow-y-auto  bg-black'>
            <div className='flex h-16 justify-between border-b border-b-[#ffffff] bg-black text-white shadow-lg shadow-purple  '>
                <div className='flex items-center justify-center text-3xl '>
                    <GiTigerHead className='flex justify-center items-center lg:ml-10 m-4 h-12 w-10' />
                    <h1 className='lg:text-3xl text-2xl'>WILD COLLECTIONS</h1>
                </div>

                <div className='flex  m-5 '>
                    <RxHamburgerMenu className='lg:hidden ' />
                </div>
            </div>
            <div className='flex flex-row items-center justify-between p-2 h-14  text-black'>
                <div className='flex flex-row items-center justify-center w-1/4'>
                    <button className=' flex flex-row items-center justify-center  bg-[#4b5563] w-full lg:w-1/2 m-2 h-8 text-white lg:text-xl shadow-lg shadow-white rounded-lg'>
                        <GiCaveman className='text-2xl' />
                        MEN
                    </button>
                </div>
                <div className='flex flex-row items-center justify-center w-1/4'>
                    <button className=' flex flex-row items-center justify-center  bg-[#4b5563] w-full lg:w-1/2 m-2 h-8 text-white lg:text-xl shadow-lg shadow-white rounded-lg'>
                        <GiSwordwoman className='mr-1 text-2xl' />
                        LADY
                    </button>
                </div>
                <div className='flex flex-row items-center justify-center w-1/4'>
                    <button className=' flex flex-row items-center justify-center  bg-[#4b5563] w-full lg:w-1/2 m-2 h-8 text-white lg:text-xl shadow-lg shadow-white rounded-lg'>
                        <TbMoodBoy className='mr-1 text-2xl' />
                        BOY
                    </button>
                </div>
                <div className='flex flex-row items-center justify-center w-1/4'>
                    <button className=' flex flex-row items-center justify-center  bg-[#4b5563] w-full lg:w-1/2 m-2 h-8 text-white lg:text-xl shadow-lg shadow-white rounded-lg'>
                        <CgGirl className='mr-1 text-2xl' />
                        GIRL
                    </button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row h-3/5 lg:h-1/3 p-5 gap-4'>
                <div className='lg:w-1/4 grid grid-cols-2 lg:gap-2  lg:h-64 gap-4 bg-white h-full rounded-lg p-2'>
                    <div className='flex rounded-lg '>
                        <Image
                            className="w-full h-32 lg:w-full lg:h-28 rounded-lg"
                            src={girlwinterware}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex rounded-lg'>
                        <Image
                            className="w-full h-32 lg:w-full lg:h-28 rounded-lg"
                            src={ladywinterware}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex rounded-lg'>
                        <Image
                            className="w-full h-32 lg:w-full lg:h-28 rounded-lg"
                            src={boywinterware}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='flex rounded-lg'>
                        <Image
                            className="w-full h-32 lg:w-full lg:h-28 rounded-lg"
                            src={menwinterware}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className='lg:w-1/ mb-2 rounded-lg'>
                    <div className='lg:w-full  lg:grid lg:grid-row-1  lg:gap-2  lg:h-64 gap-4 h-full rounded-lg p-2'>
                        <div className='flex rounded-lg mb-4 '>
                            <Image
                                className="w-full h-96  lg:w-full lg:h-28 rounded-lg"
                                src={boystlishware}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='flex rounded-lg mb-4'>
                            <Image
                                className="w-full h-96  lg:w-full lg:h-28 rounded-lg"
                                src={girlstylishware}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='flex rounded-lg mb-4'>
                            <Image
                                className="w-full h-96  lg:w-full lg:h-28 rounded-lg"
                                src={ladystylishware}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='flex rounded-lg mb-4'>
                            <Image
                                className="w-full h-96  lg:w-full lg:h-28 rounded-lg"
                                src={menstylishware}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/4 bg-purple-300 h-full rounded-lg'>
                    right
                </div>
            </div>
            {/*
            <div className='bg-rose h-48'>
                section(footer)
            </div>
            <div className='bg-cyan h-16'>
                footer
            </div> */}
        </div>
    )
}

export default Component1