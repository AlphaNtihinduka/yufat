import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

const Welcome = () => {
  return (
    <Card className='flex justify-between items-center px-3'>
        <CardContent className='text-gray-400'>
            <h2>WELCOME TO YUFAT</h2>
            <p>YUFAT is a community-based organization whose specific
                 objective is to equip young Africans with quality digital 
                 skills that go beyond basic knowledge enabling them to utilize
                 the power of technology and actively contribute to the transformation of Africa</p>
        </CardContent>
        <CardContent>
        <Image
            src="https://s3.amazonaws.com/my-bucket/profile.png"
            alt="Picture of the author"
            width={500}
            height={500}
        />
        </CardContent>
        
    </Card>
  )
}

export default Welcome