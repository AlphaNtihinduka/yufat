import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

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
            <img src="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="welcome img" />
        </CardContent>
        
    </Card>
  )
}

export default Welcome