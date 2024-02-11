import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <main className='flex my-3'>
        <h2>Services</h2>
        <div className='flex my-3'>
        <Card>
            <CardContent>
                <img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="digital  boday" />
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
                <img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="digital  boday" />
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