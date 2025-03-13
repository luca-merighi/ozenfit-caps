'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface SidebarProviderProps {
    children: ReactNode
}

interface SidebarContextProps {
    isSidebarOpen: 'open' | 'closed',
    toggleSidebar: () => void
}

export const SidebarContext = createContext({} as SidebarContextProps)

export function SidebarProvider({ children }: SidebarProviderProps) {
    const [ isSidebarOpen, setSidebarOpen ] = useState<'open' | 'closed'>('closed')

    function toggleSidebar() {
        isSidebarOpen === 'open' ? setSidebarOpen('closed') : setSidebarOpen('open')
    }

    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)