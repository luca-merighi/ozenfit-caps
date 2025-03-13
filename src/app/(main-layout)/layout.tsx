import { ReactNode } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import WhatsAppLink from '@/components/whatsapp-link'

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="
            min-h-screen
            bg-gradient-to-tr from-emerald-50 via-green-50 to-teal-50">
            <ScrollArea.Root className="w-full h-full overflow-hidden">
                <ScrollArea.Viewport className="relative w-full min-h-screen">
                    {children}
                </ScrollArea.Viewport>

                <ScrollArea.Scrollbar
                    orientation="vertical"
                    className="
                        flex select-none touch-none p-0.5 bg-slate-300
                        data-[orientation=vertical]:w-3 data-[orientation=horizontal]:flex-col
                        data-[orientation=horizontal]:h-3">
                    <ScrollArea.Thumb className="
                        flex-1 bg-slate-400 rounded-[10px] relative
                        before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2
                        before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>

            <WhatsAppLink
                CSSClass="
                    fixed bottom-4 right-4 z-50
                    bg-emerald-400 p-2
                    hover:bg-emerald-500 focus:outline-none
                    focus-visible:bg-emerald-500 focus-visible:border-emerald-950"
                iconSize="text-4xl" />
        </div>
    )
}