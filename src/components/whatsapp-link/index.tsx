import Link from 'next/link'

import { FaWhatsapp } from 'react-icons/fa6'

interface WhatsAppLinkProps {
    CSSClass: string,
    iconSize?: string,
    text?: string
}

export default function WhatsAppLink({ CSSClass, iconSize, text }: WhatsAppLinkProps) {
    return (
        <Link
            href="https://api.whatsapp.com/send?phone=+5519981906576&text=Olá! Tenho interesse e queria mais informações, por favor."
            title="Entrar em Contato por WhatsApp"
            target="_blank"
            className={`
                ${CSSClass}
                flex gap-2 items-center justify-center md:w-fit p-2
                text-xl text-white font-medium tracking-wider font-poppins
                border-2 border-transparent rounded-full shadow-md
                transition-colors`}>
            <FaWhatsapp className={`${iconSize ?? 'text-3xl'}`} />

            {text}
        </Link>
    )
}