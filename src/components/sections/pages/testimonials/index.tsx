import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'

import { IoChatbubbleEllipses } from 'react-icons/io5'
import TestimonialsList from './testimonials-list'

const list = [
    {
        profileImage: '/images/profiles/img-1.png',
        name: 'Olívia Magalhães',
        age: 35,
        description: 'Super Recomendo! Produto condiz com o resultado que tive , inclusive já fiz novo pedido , desde já agradeço todos vocês.'
    },
    {
        profileImage: '/images/profiles/img-2.png',
        name: 'Carla Cristina',
        age: 38,
        description: 'Nossa, me sinto muito mais confiante com as mudanças no meu corpo que tive até aqui, minha barriga vivia estufada, parecia que eu estava doente, estou muito satisfeita, estou amando o tratamento! Recomendo demais pessoal!'
    },
    {
        profileImage: '/images/profiles/img-3.png',
        name: 'José Rodrigues',
        age: 49,
        description: 'Produto realmente funciona. Mudança incrível para os primeiros dias, já estou sentindo diferença na pochete e também na saciedade.'
    },
    {
        profileImage: '/images/profiles/img-4.png',
        name: 'Márcia Andrade',
        age: 42,
        description: 'Produto chegou super rápido, antes mesmo da data prevista. Amei o OZENFIT CAPS, com certeza comprarei mais vezes, pois sofro com gordurinhas indesejadas desde a minha primeira gravidez! Recomendo!'
    },
]

export default function Testimonials() {
    return (
        <SectionTemplate
            id="testimonials"
            newBGColor="bg-slate-50"
            flexClass="flex flex-col gap-8 md:items-center md:justify-center">
            <div className="flex flex-col gap-3 md:items-center md:text-center">
                <TextPill
                    bgGradientColor="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    bgPill="bg-transparent"
                    icon={IoChatbubbleEllipses}
                    text="Prova Social"
                    textColor="text-white" />

                <strong className="text-lg lg:text-2xl xl:text-3xl text-slate-950 font-lato font-black">
                    Mas não sou só eu. 👀 <br />
                    Veja o que <span className="underline decoration-emerald-400 decoration-2 underline-offset-4 xl:underline-offset-8">outras pessoas</span> como você estão dizendo sobre o <strong className="text-emerald-500">OZENFIT CAPS</strong>:
                </strong>

            </div>

            <TestimonialsList />

            <p className="
                px-2 py-1 xl:pl-3 xl:py-2 bg-slate-150
                text-base md:text-lg xl:text-xl font-medium italic
                border-l-2 rounded-r-md border-slate-300">
                E tem mais: o <strong className="text-emerald-500">OZENFIT CAPS</strong> é aprovado pela <strong>ANVISA</strong>, criado por especialistas que entendem o que o nosso corpo precisa. Milhares de brasileiros já estão vivendo o ‘Efeito Ozempic Brasileiro’ – emagrecer de verdade, sem sofrimento
            </p>
        </SectionTemplate>
    )
}