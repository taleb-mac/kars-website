'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ui/mode-toggle'
import karsLogo from '@/public/kars-logo-black.svg'
import {Menu} from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/" },
        { title: "Events", path: "/" },
        { title: "Join Us", path: "/" },
        { title: "Contact Us", path: "/" },
    ]

    return (
      <nav className="bg-background w-full border-b md:border-0">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className='dark:invert'>
              <Image src={karsLogo} alt='Kars Logo' width={250}/>
            </Link>
            <div className="md:hidden">
              <button
                className="text-foreground outline-none p-2 rounded-md focus:border-border focus:border"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu />
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menus.map((item, idx) => (
                <li key={idx} className="text-foreground hover:text-popover-foreground">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
                <li>
                  <ModeToggle />
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

{/* <div>
    <ModeToggle />
</div> */}