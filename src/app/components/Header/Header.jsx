import { Reveal } from '@/app/utils/Reveal';
import React from 'react'
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <>
        <main className='w-full z-20 lg:w-[1200px] lg:mx-auto md:px-8 lg:px-0 flex my-4 md:my-0 justify-between md:h-24 items-center header px-4'>

            {/* logo  */}
            <div className='w-100'>
               <Reveal>
                <h2 className='poppins-semibold text-4xl border-b-4 border-[#26097f] '>LOGO</h2>
                </Reveal>
            </div>

            {/* right side mail box  */}
            <Reveal>

            <div className='bg-[#26097f] my-3 md:my-0 text-white hover:transition-all hover:duration-600 hover:ease-in-out hover:bg-white hover:text-[#7f7df8] hover:border flex justify-center items-center px-5 py-2 cursor-pointer rounded-3xl'>
                <IoIosMail 
                className='text-xl mr-1'
                />
                <p className='poppins-regular text-[11px] md:text-[15px]'>
                  hi@example.io
                  </p>
            </div>
                </Reveal>

        </main>
    </>
  )
}

export default Header