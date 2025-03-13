import Link from 'next/link'
import { useSidebar } from '@/contexts/sidebar'
import * as Dialog from '@radix-ui/react-dialog'

import WhatsAppLink from '@/components/whatsapp-link'


const list = [
    {
        url: '#video-vsl',
        text: 'Início'
    },
    {
        url: '#lead',
        text: 'A Verdade'
    },
    {
        url: '#story',
        text: 'O Problema'
    },
    {
        url: '#pitch',
        text: 'A Solução'
    },
    {
        url: '#testimonials',
        text: 'Depoimentos'
    },
    {
        url: '#offers',
        text: 'Ofertas'
    },
    {
        url: '#faq',
        text: 'FAQ e Suporte'
    }
]

interface NavLinksProps {
    location: 'header' | 'sidebar'
}

export default function NavLinks({ location }: NavLinksProps) {
    const { toggleSidebar } = useSidebar()

    return location === 'header' ? (
        <nav className="hidden lg:flex lg:items-center lg:justify-center">
            <ul className="flex gap-2 items-center justify-center">
                {list.map((item, index) => {
                    return (
                        <li
                            key={`item-${index}`}>
                             <Link
                                href={item.url}
                                className="
                                w-full px-1 py-2 xl:px-2 flex items-center
                                text-base text-stone-700 font-medium
                                border-2 border-transparent rounded-md
                                transition-colors hover:bg-slate-100 focus:outline-none
                                focus-visible:bg-slate-100 focus-visible:border-slate-900">
                                {item.text}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    ) : (
        <nav className="flex flex-col gap-8 px-6">
            <ul className="flex flex-col">
                {list.map((item, index) => {
                    return (
                        <Dialog.Close
                            key={`item-${index}`}
                            onClick={toggleSidebar}>
                            <li className="w-full flex items-center justify-center">
                                <Link
                                    href={item.url}
                                    className="
                                    w-full px-2 py-3 flex items-center
                                    text-xl text-stone-700 font-medium
                                    border-2 border-transparent rounded-md
                                    transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        </Dialog.Close>
                    )
                })}
            </ul>

            <WhatsAppLink
                CSSClass="
                bg-emerald-500 md:px-4
                hover:bg-emerald-400 focus:outline-none
                focus-visible:bg-emerald-400 focus-visible:border-emerald-950"
                text="WhatsApp" />
        </nav>
    )
}