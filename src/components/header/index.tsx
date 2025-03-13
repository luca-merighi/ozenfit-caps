'use client'

import { useState, useEffect } from 'react'
import * as motion from 'motion/react-client'

import HeaderContainer from './header-container'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -300, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="
            fixed top-0 left-0 right-0 z-50
            bg-white w-full flex items-center justify-center
            px-6 py-2 xl:px-0
            border-b-2 border-slate-200">
            <HeaderContainer />
        </motion.header>
    )
}