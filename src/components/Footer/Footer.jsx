import React from 'react'
import ToggleButton from '../ToggleButton';


const Footer = () => {
  return (
    <div className='mb-4'>
    <div className='flex items-center '>
        <h2 className='text-[2rem] font-semibold mx-5'>Use different design for remaining SKU's</h2> 
        <ToggleButton/>
    </div>
       <div className='flex justify-around items-center'>
        <div className="shadow-sm bg-slate-100  w-[650px]  h-[250px] flex justify-center items-center mb-2">
          <div className="flex justify-center items-center  px-4  py-2">N/A</div>
        </div>
        <div className="shadow-sm bg-white  min-w-[200px]  min-h-[150px] flex justify-center items-center border-2 mb-2">
          <img src="" alt="" />
          <p>Multi Images-fallback</p>
        </div>
        <div className="shadow-sm bg-white  min-w-[200px]  min-h-[150px] flex justify-center items-center border-2 mb-2">
        <img src="" alt="" />
        <p>4 Multi Images-fallback</p>
        </div>
       </div>
        <div>

        </div>
    </div>
  )
}

export default Footer;