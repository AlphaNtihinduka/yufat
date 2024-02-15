"use client";
import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import yufatlogo from '@/assets/yufat-logo.png';


const Navigation = () => {
  return (
    <main className='navigation flex justify-between items-center py-2'>
      <ul>
        <li>
          <Image src={yufatlogo} alt='yufatlogo' width={100} height={100} />
        </li>
      </ul>
      
      <ul className='flex gap-3 text-gray-600'>
        <li><Button><Link href="/">Home</Link> </Button></li>
        <li><Button><Link href="/about">About</Link> </Button></li>
        <li><Button><Link href="/contact">Contact</Link> </Button></li>
        <li><Button><Link href="/services">Services</Link> </Button></li>
        <li><Button><Link href="/blog">Blog</Link> </Button></li>
        <li><Button className='bg-primary hover:bg-[#FF9F24]'><Link href="/donate">Donate</Link> </Button></li>
      </ul>
    </main>  
      
  )
}

export default Navigation