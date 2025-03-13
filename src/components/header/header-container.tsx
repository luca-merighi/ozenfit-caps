import Image from 'next/image'

import Sidebar from './sidebar'
import NavLinks from './nav-links'

export default function HeaderContainer() {
    return (
        <div className="w-full max-w-7xl flex items-center justify-between">
            <Image
                src="/images/logo.png" alt="Logo OzenFit Caps"
                width={700} height={220} quality={100}
                className="w-40 lg:w-48" />

            <NavLinks location="header" />

            <div className="lg:hidden">
                <Sidebar />
            </div>
        </div>
    )
}