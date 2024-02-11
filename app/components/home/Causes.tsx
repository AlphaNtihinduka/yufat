import React from 'react'
import {Card} from '@/components/ui/card'

const Causes = () => {
  return (
    <main className='bg-black'>
      <h2 className='text-white'>Our Causes</h2>
      <div className='flex justify-center gap-11'>
        <Card className='w-80'>
        <h3>Computer Literacy</h3>
        <p>YUFAT's focus on training in Microsoft packages, 
          internet usage, graphics design and Computer Aided Learning(CAL)
           promotes computer literacy.
          This is essiential in the digital age and is a key 
          factor in the development of the African continent.
        </p>
      </Card>
      <Card className='w-80'>
      <h3>Supporting Refugee Settlements</h3>
        <p>YUFAT's presence and inititatives, particularly in Kyaka II  refugee Settelement,
          provide support and educational opportunities to the refugees. This
          supoort helps enhance their resilience, integration and overall well-being.
        </p>
      </Card>
      </div>  
    </main>
  )
}

export default Causes