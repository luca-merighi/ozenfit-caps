import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'
import BenefitsList from './benefits-list'

import { FaBullseye } from 'react-icons/fa6'

export default function Pitch() {
    return (
        <SectionTemplate
            id="pitch"
            newBGColor="bg-slate-100"
            flexClass="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <TextPill
                    bgGradientColor="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    bgPill="bg-transparent"
                    icon={FaBullseye}
                    text="A Solução"
                    textColor="text-white" />

                <strong className="text-lg lg:text-2xl xl:text-3xl text-slate-950 font-lato font-black">
                    Como Eu Disse Adeus à Gordura e ao Efeito Sanfona
                </strong>

                <div className="flex flex-col gap-3 text-sm md:text-base xl:text-xl text-slate-700">
                    <p>
                        "Depois que comecei a usar o <strong>OZENFIT CAPS</strong>, tudo ficou mais fácil. Não precisei virar atleta nem abrir mão do meu brigadeiro de fim de semana. Com só 2 cápsulas por dia, minha fome louca por doces sumiu, meu intestino começou a funcionar como nunca, e eu senti uma energia que nem sabia que ainda tinha. Em 3 meses, perdi 12kg – e o melhor: sem efeito sanfona. Foi como se meu corpo tivesse ligado o modo ‘queima de gordura’ sozinho.
                    </p>

                    <p>
                        O segredo? Uma fórmula americana, 100% natural, que mistura coisas como psyllium pra saciedade, cromo pra controlar a vontade de comer, e spirulina pra me deixar mais disposta. Não é mágica – é ciência que funciona com o meu corpo, não contra ele. E o nome <strong>OZENFIT CAPS</strong> ficou na minha cabeça como o atalho que eu precisava pra voltar a me amar."
                    </p>
                </div>
            </div>

            <BenefitsList />
        </SectionTemplate>
    )
}