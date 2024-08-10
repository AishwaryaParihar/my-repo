import React from 'react'

const Notification = () => {
  return (
    <div>
       
    <form action="">
     <label className='font-semibold pb-2' htmlFor="add">Marquee:</label>
    <textarea name="add" id="" placeholder='write your marquee' className='w-full p-3 max-h-svh border border-black' ></textarea>
    <div className=' text-center'>
    <button className='p-2 rounded-md my-4 font-semibold shadow-red-300 shadow'>Submit</button>
    </div>

    </form>
  
 </div>
  )
}

export default Notification