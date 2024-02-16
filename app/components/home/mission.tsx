import React from 'react'
import {Card} from '@/components/ui/card'
import Image from 'next/image';
import userImg from '@/assets/codin-And-Disability.jpg'

const Causes = () => {
  return (
    <Card className='bg-transparent flex justify-center flex-col items-center'>
      <h2 className='heading'>What do we do</h2>
      <p className='text-secondary text-base w-4/5'>YUFAT empowers the refugees and host youth in community and students in schools with
        digital skills to promote digtal equality. Refugees in rural areas deserve
        equal access to digital literacy
      </p>
      <div className='flex justify-center gap-11 mt-2 flex-col'>
        <div className='flex'>
          <Card>            
            <Image
                src={userImg}
                alt="digital boda"
                width={500}
                height={500}
            />
          </Card>
          <Card>
            <Image
                  src={userImg}
                  alt="digital boda"
                  width={500}
                  height={500}
              />
          </Card>
        </div>
        <div className='flex justify-between'>
          <Card className='w-80 text-secondary'>
          <h3 className='text-green-600 text-2xl font-bold text-center'>Mission</h3>
          <p>YUFAT focuses on training in Microsoft packages, 
            internet usage, graphics design and Computer Aided Learning(CAL)
            promotes computer literacy.
            This is essiential in the digital age and is a key 
            factor in the development of the African continent.
          </p>
          </Card>
          <Card className='w-80 text-secondary'>
          <h3 className='text-orange-500 text-2xl font-bold text-center'>Vision</h3>
            <p>YUFAT presence and inititatives, particularly in Kyaka II  refugee Settelement,
              provide support and educational opportunities to the refugees. This
              supoort helps enhance their resilience, integration and overall well-being.
            </p>
          </Card>
        </div>
      </div>  
    </Card>
  )
}

export default Causes