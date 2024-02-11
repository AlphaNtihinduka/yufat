import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Services = () => {
  return (
    <main className='flex my-3'>
        <h2>Services</h2>
        <div className='flex my-3'>
        <Card>
            <CardContent>
            <Image
                src="https://s3.amazonaws.com/my-bucket/profile.png"
                alt="techleap"
                width={500}
                height={500}
            />
                <h3>TechLeap</h3>
                <p>Educate teh next generation with technological advancement
                    in Microsoft Packages, Internet Usage
                    and graphics design providing skills and knowledge needed to thrive
                    in the digital age.
                </p>
                <Button>Learn More</Button>
            </CardContent>
        </Card> 
        <Card>
            <CardContent>
            <Image
                src="https://s3.amazonaws.com/my-bucket/profile.png"
                alt="digital boda"
                width={500}
                height={500}
            />
                <h3>Digital Boda</h3>
                <p>Educate teh next generation with technological advancement
                    in Microsoft Packages, Internet Usage
                    and graphics design providing skills and knowledge needed to thrive
                    in the digital age.
                </p>
                <Button>Learn More</Button>
            </CardContent>
        </Card> 
        </div>

    </main>
  )
}

export default Services