import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'

import { FaLightbulb } from 'react-icons/fa6'

export default function Lead() {
    return (
        <SectionTemplate
            id="lead"
            newBGColor="bg-slate-100"
            flexClass="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <TextPill
                    bgGradientColor="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    bgPill="transparent"
                    icon={FaLightbulb}
                    text="A Verdade"
                    textColor="text-white" />

                <strong className="text-lg lg:text-2xl xl:text-3xl text-slate-950 font-lato font-black">
                    A Verdade Sobre Por Que Você Ainda Não Conseguiu Emagrecer <br /> E Como Mudar Isso de Uma Vez por Todas 💪
                </strong>

                <div className="flex flex-col gap-3 text-sm md:text-base xl:text-lg text-slate-700">
                    <p>
                        Imagine isso: você está se arrumando pra sair, mas nenhuma roupa cai bem. A barriga insiste em aparecer, as calças apertam, e aquele vestido que você ama? Ficou no fundo do armário, juntando poeira. Você já tentou de tudo – dietas que te deixam com fome, remédios caros que prometem milagres, até aquelas caminhadas que nunca duram mais de uma semana. E o resultado? Sempre o mesmo: a gordura volta, a autoestima vai embora, e você se pergunta:
                    </p>
                    <p className="
                        pl-2 py-1 xl:pl-3 xl:py-2 bg-slate-150
                        text-base md:text-lg xl:text-xl font-medium italic
                        border-l-2 rounded-r-md border-slate-300">
                        “Será que eu vou ficar assim pra sempre?”
                    </p>
                    <p>
                        Você já se sentiu assim? Já olhou pro espelho e quis voltar no tempo? Já perdeu as contas de quanto gastou em promessas que não entregam nada? Se isso te parece familiar, você não está sozinha(o). Milhares de brasileiros vivem esse ciclo – mas hoje, eu vou te mostrar como quebrar ele de uma vez por todas.
                    </p>
                </div>
            </div>
        </SectionTemplate>
    )
}