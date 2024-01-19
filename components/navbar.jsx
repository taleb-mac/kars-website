import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ui/mode-toggle'
import karsLogo from '@/public/vercel.svg'

export default function Navbar() {
    return(
        <div>
            <nav className="w-full fixed top-0 left-0 right-0 z-10">
                <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div className="flex items-center justify-between py-4 md:py-5 md:block">
                        <Link href='/'>
                            <Image src={karsLogo} alt='Kars Logo' width={150} height={50} />
                        </Link>
                        <div>
                            <ModeToggle />
                        </div>
                    </ div>
                </div>
            </nav>
        </div>
    )
}