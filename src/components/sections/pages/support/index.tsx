import Image from 'next/image'

import WhatsAppLink from '@/components/whatsapp-link'
import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'

import { FaHeadphones  } from 'react-icons/fa6'

export default function Support() {
    return (
        <SectionTemplate
            id="support"
            newBGColor="bg-emerald-500"
            flexClass="flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="flex flex-col gap-3 items-center lg:w-[50%] lg:items-start">
                <TextPill
                    bgGradientColor="bg-white"
                    bgPill="bg-transparent"
                    icon={FaHeadphones }
                    text="Suporte"
                    textColor="text-slate-950" />

                <strong className="text-lg lg:text-2xl xl:text-3xl text-slate-950 font-lato font-black text-center lg:text-start">
                    Ainda Há Dúvidas? 🤔 <br />
                    Fale com nossos especialistas!
                </strong>

                <WhatsAppLink
                    CSSClass="
                    bg-emerald-900 md:px-4 hover:bg-emerald-800 focus:outline-none
                    focus-visible:bg-emerald-800 focus-visible:border-emerald-50"
                    text="Entrar em Contato" />
            </div>

            <figure className="relative w-full lg:w-[50%] h-60 md:h-96 flex items-center justify-center">
                <div className="
                    absolute top-0 right-0 z-30
                    h-full w-[75%]
                    bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-950
                    rounded-md" />

                <Image
                    src="/images/support.png" alt="Imagem de Suporte ao Cliente"
                    width={2070} height={1380} quality={100}
                    className="
                        absolute bottom-0 z-40
                        w-full h-52 md:h-80 lg:h-[22rem] object-cover rounded-md rounded-tr-none shadow-md" />
            </figure>
        </SectionTemplate>
    )
}