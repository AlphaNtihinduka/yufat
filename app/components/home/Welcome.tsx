import { Card, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import global from '@/assets/global.png'
import computerlab from '@/assets/computerlab.png'

const Welcome = () => {
  return (
    <Card className='bg-transparent px-0 mx-0 flex justify-center flex-col items-center'>
        <h2 className='heading'>Causes</h2>
        <CardContent className='flex gap-6 justify-between'>
            <div className='w-2/4'>
            <CardTitle className='text-primary text-xl'>Refugees Lack opportunities</CardTitle> 
            <CardDescription className='text-base text-secondary'>
                 There are many global opportunities that refugees can equally compete for
                 than here in Uganda. YUFAT equips the refugees with digital skills to
                 to prepare them for such opportunities.
            </CardDescription>
            </div>
            <Card className='bg-transparent'>
              <Image
              className='rotate-global'
              src={global}
              alt="glabal opportunities"
              width={300}
              height={300}
              />
              </Card>
              
        </CardContent>

        <CardContent className='flex gap-6 justify-between'>
          <Card className='bg-transparent'>
            <Image
              src={computerlab}
              alt="computer lab"
              width={400}
              height={400}
              />
              </Card>
            
            <div className='w-2/4'>
            <CardTitle className='text-primary text-xl'>Refugee schools have no access to computer laboratories</CardTitle> 
            <CardDescription className='text-base text-secondary'>
                 The students in the remote schools are at a disadvantage as they can
                 not aquire the digital skills necessary to thrive in today
                 technology oriented world.
            </CardDescription>
            <p className='pt-2 text-muted-foreground'><span className='px-8 mr-1 bg-primary text-primary'>.</span>Students and teachers currently lack opportunities to utilize 
                 digital tools for learning purposes. 
                 This becoms hard for students to conduct research, which is a 
                 fundamental requirement for the new curriculum
                 started in 2019. This is a big problem because students need
                 to learn how to use computers for their studies and future career development. 
                 Addressing this problem is crucial to ensure equitable access to learning resources and to enhance prospects 
                 for success in both educational endeavors and career advancement.
            </p>
                 
            
            </div>
 
        </CardContent>
        
    </Card>
  )
}

export default Welcome