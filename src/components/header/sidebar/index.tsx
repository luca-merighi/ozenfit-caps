'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useSidebar } from '@/contexts/sidebar'

import { HiMenuAlt3 } from 'react-icons/hi'

import SidebarContainer from './sidebar-container'

export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useSidebar()

    return (
        <Dialog.Root
            open={isSidebarOpen === 'open' ? true : false}
            onOpenChange={toggleSidebar}
            data-set={isSidebarOpen}>
            <Dialog.Trigger asChild>
                <button
                    type="button"
                    title="Abrir Menu"
                    className="
                        flex items-center justify-center
                        p-0.5 text-3xl text-slate-700
                        border-2 border-transparent rounded-md
                        ">
                    <HiMenuAlt3 />
                </button>
            </Dialog.Trigger>

            <SidebarContainer />
        </Dialog.Root>
    )
}