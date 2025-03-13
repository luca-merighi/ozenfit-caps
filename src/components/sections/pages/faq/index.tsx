import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'
import FAQList from './faq-list'

import { FaCircleQuestion } from 'react-icons/fa6'

export default function FAQ() {
    return (
        <SectionTemplate
            id="faq"
            newBGColor="bg-emerald-500"
            flexClass="flex flex-col gap-8 lg:items-center">
            <div className="flex flex-col gap-3 items-center">
                <TextPill
                    bgGradientColor="bg-white"
                    bgPill="bg-transparent"
                    icon={FaCircleQuestion}
                    text="Perguntas Frequentes"
                    textColor="text-slate-950" />

                <strong className="text-lg md:text-2xl xl:text-3xl text-slate-950 font-lato font-black text-center">
                    Dúvidas? 🤔 <br />
                    Aqui estão as respostas!
                </strong>
            </div>

            <FAQList />
        </SectionTemplate>
    )
}