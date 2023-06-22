'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () =>{
    const router = useRouter();

    return(
        <Image 
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidde md:block cursor-pointer"
        height= "120"
        width= "120"
        src= "/images/logo.png"
        />
    )

}

export default Logo;

