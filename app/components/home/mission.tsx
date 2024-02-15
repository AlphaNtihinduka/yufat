import React from 'react'
import {Card} from '@/components/ui/card'

const Causes = () => {
  return (
    <Card className='bg-transparent flex justify-center flex-col items-center'>
      <h2 className='heading'>What do we do</h2>
      <p className='text-secondary text-base'>YUFAT empowers the refugees and host youth in community and students in schools with
        digital skills to promote digtal equality. Refugees in rural areas deserve
        equal access to digital literacy
      </p>
      <div className='flex justify-center gap-11'>
        <Card className='w-80'>
        <h3>Mission</h3>
        <p>YUFAT focuses on training in Microsoft packages, 
          internet usage, graphics design and Computer Aided Learning(CAL)
           promotes computer literacy.
          This is essiential in the digital age and is a key 
          factor in the development of the African continent.
        </p>
      </Card>
      <Card className='w-80'>
      <h3>Vision</h3>
        <p>YUFAT presence and inititatives, particularly in Kyaka II  refugee Settelement,
          provide support and educational opportunities to the refugees. This
          supoort helps enhance their resilience, integration and overall well-being.
        </p>
      </Card>
      </div>  
    </Card>
  )
}

export default Causes