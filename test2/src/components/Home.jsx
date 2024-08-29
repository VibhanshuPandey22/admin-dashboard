import React from 'react'
import Card from './Card'
import Navbar2 from './Navbar2'

const Home = ( { hover } ) => {


    return (

        <div className={` ${hover ? 'ml-[14.25rem]'  : 'ml-[3.375rem]'} transition-all duration-[650ms] h-screen`}>
             <Navbar2 />
            <div>
                <div className='grid grid-cols-2 gap-4 h-[11rem] mx-12 my-7'> 
                    <div className=' rounded-xl'><Card /></div>
                    <div className='rounded-xl'><Card /></div>
                </div>

                <div className='grid grid-cols-11 gap-4 h-[21rem] mx-12 my-7'>   
                    <div className='col-span-6 rounded-xl'><Card /></div>
                    <div className='col-span-5 rounded-xl'><Card /></div>
                </div>  
                
                <div className='grid grid-cols-10 gap-4 h-[18rem] mx-12 my-7'>   
                    <div className='col-span-3 rounded-xl'><Card /></div>
                    <div className=' col-span-3 rounded-xl'><Card /></div>
                    <div className=' col-span-4 rounded-xl'><Card /></div>
                </div>  
            </div>
        </div>

        
    )
}

export default Home