import Image from 'next/image'

import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'
import FAQList from './faq-list'

import { FaCircleQuestion } from 'react-icons/fa6'

export default function FAQ() {
    return (
        <SectionTemplate
            id="faq"
            newBGColor="bg-emerald-500"
            flexClass="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:items-center">
            <div className="lg:w-[70%] flex flex-col gap-3 items-center lg:items-start">
                <TextPill
                    bgGradientColor="bg-white"
                    bgPill="bg-transparent"
                    icon={FaCircleQuestion}
                    text="Perguntas Frequentes"
                    textColor="text-slate-950" />

                <strong className="text-lg md:text-2xl xl:text-3xl text-slate-950 font-lato font-black text-center lg:text-start">
                    Dúvidas? 🤔 <br />
                    Aqui estão as respostas!
                </strong>

                <FAQList />
            </div>

            <figure className="self-start w-full lg:w-[30%] flex items-center justify-center">
                <Image
                    src="/images/guarantee.png" alt="Selo de 7 dias de garantia"
                    width={500} height={500} quality={100}
                    className="w-[70%] md:w-[50%] lg:w-full" />
            </figure>
        </SectionTemplate>
    )
}