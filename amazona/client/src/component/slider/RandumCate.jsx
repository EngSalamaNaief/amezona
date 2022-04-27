import React from 'react'

export default function RandumCate() {
  return (
    <div className='h-1/2 w-full bg-rose-200 p-6'>
       <div className='flex justify-between'>
          <div className='rounded-full overflow-hidden w-32 h-32 skew-y-12 skew-x-3'> <img  src="./img/0.jpg" className='w-full h-full object-center' alt="0" /> </div>
          <div className='rounded-full overflow-hidden w-32 h-32 -skew-x-3 -skew-y-3'> <img  src="./img/1.jpg" className='w-full h-full object-center' alt="1" /> </div>
          <div className='rounded-full overflow-hidden w-32 h-32 skew-y-6 skew-x-3'> <img  src="./img/2.jpg" className='w-full h-full object-center' alt="2" /> </div>
          <div className='rounded-full overflow-hidden w-32 h-32 skew-y-12 -skew-x-3'> <img  src="./img/3.jpg" className='w-full h-full object-center' alt="3" /> </div>
       </div>
       <div className='flex justify-around py-2'>
            <div className='rounded-full overflow-hidden w-32 h-32 skew-x-6 skew-y-6'> <img  src="./img/4.jpg" className='w-full h-full object-center' alt="4" /> </div>
            <div className='rounded-full overflow-hidden w-32 h-32'> <img  src="./img/5.jpg" className='w-full h-full object-center' alt="5" /> </div>
            <div className='rounded-full overflow-hidden w-32 h-32 skew-y-6 -skew-x-6'> <img  src="./img/6.jpg" className='w-full h-full object-center' alt="6" /> </div>
       </div>
    </div>
  )
}
