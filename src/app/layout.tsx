import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Poppins, Lato } from 'next/font/google'
import { SidebarProvider } from '@/contexts/sidebar'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-poppins' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-lato' })

export const metadata: Metadata = {
    title: 'OzenFit Caps',
    description: 'Descubra o poder do OzenFit Caps! Fórmula 100% natural que acelera o metabolismo, reduz o apetite e elimina gorduras indesejadas. Emagreça com saúde e resultados garantidos. Experimente agora!',
    authors: [{ name: 'Luca Merighi' }],
    openGraph: { images: [{ url: '/images/card.png' }]}
}

interface RootLayoutProps {
    children: Readonly<ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <SidebarProvider>
            <html lang="pt-BR" className="antialiased scroll-smooth">
                <body className={poppins.className}>
                    {children}
                </body>
            </html>
        </SidebarProvider>
    )
}