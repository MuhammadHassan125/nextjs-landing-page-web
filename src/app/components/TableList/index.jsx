import React from 'react'
import TableList from './TableList'
import { Reveal } from '@/app/utils/Reveal'

const Table = () => {
  return (
    <>
    <main className='lg:w-[1200px] md:mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 md:text-justify py-[40px]'>
            <div className='w-[90%] m-auto md:w-[60%]'>
              <Reveal>

                <h2 className='poppins-medium text-[25px] md:text-[40px]'>Our Monthly  <br/>
                Subcribed Users List.</h2>
              </Reveal>
            </div>

            <div className='w-[90%] m-auto md:w-[35%]'>
              <Reveal>

                <p className='poppins-light '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolores nesciunt culpa doloribus neque consequuntur. Saepe, molestiae unde minima impedit?
                </p>
              </Reveal>
            </div>
    </main>

    <TableList/>
    </>
  )
}

export default Table