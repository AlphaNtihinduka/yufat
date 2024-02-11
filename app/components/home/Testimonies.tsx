import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import userImg from '@/assets/codin-And-Disability.jpg'


const Testimonies = () => {
  return (
    <main>
        <h2>Testimonies</h2>
        <div>
        <Avatar>
            <AvatarImage src={userImg.src} />
            <AvatarFallback>alt</AvatarFallback>
        </Avatar>
        <p>When I arrived as a refugee, I felt lost and disconnected. YUFAT changed that.
            Through their coding and tech classes, I gained not only
            technical skills but also a sense of community and belonging.
        </p>
        </div>
    </main>
  )
}

export default Testimonies