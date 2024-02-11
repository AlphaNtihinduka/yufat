"use client";
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';


const Navigation = () => {
  return (
    <main className='flex justify-between items-center py-2'>
      <ul>
        <li>
          Logo
        </li>
      </ul>
      
      <ul className='flex gap-3 text-gray-600'>
        <li><Button><Link href="/">Home</Link> </Button></li>
        <li><Button><Link href="/about">About</Link> </Button></li>
        <li><Button><Link href="/contact">Contact</Link> </Button></li>
        <li><Button><Link href="/services">Services</Link> </Button></li>
        <li><Button><Link href="/blog">Blog</Link> </Button></li>
        <li><Button><Link href="/donate">Donate</Link> </Button></li>
      </ul>
    </main>  
      
  )
}

export default Navigation