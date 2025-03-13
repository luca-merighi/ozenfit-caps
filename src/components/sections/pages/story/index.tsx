import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'

import { FaBan } from 'react-icons/fa6'

export default function Story() {
    return (
        <SectionTemplate
            id="story"
            flexClass="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <TextPill
                    bgGradientColor="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    bgPill="bg-gradient-to-tr from-emerald-50 via-green-50 to-teal-50"
                    icon={FaBan}
                    text="O Problema"
                    textColor="text-slate-950" />

                <strong className="text-lg lg:text-2xl xl:text-3xl text-slate-950 font-lato font-black">
                    Você Já Se Sentiu Presa no Próprio Corpo?
                </strong>

                <div className="flex flex-col gap-3 text-base md:text-lg xl:text-xl text-slate-700">
                    <p>
                        "Meu nome é Ana – sou mãe, trabalho o dia todo e, como muita gente, amo um pão de queijo com café. Mas há dois anos, eu me olhei no espelho e não aguentei mais. Estava com 82kg, minha barriga parecia que nunca ia embora, e eu vivia cansada. Tentei de tudo: dietas da moda que me deixavam com fome e mal-humorada, remédios que custavam R$800 por mês – e olha que eu ainda sentia náusea o tempo todo! Fora as idas à academia que duraram uns 15 dias antes de eu desistir.
                    </p>
                    <p>
                        O pior? Nada funcionava de verdade. Eu perdia 2kg, mas ganhava 4 logo depois. Era o famoso efeito sanfona – e com ele vinha a vergonha de não caber nas minhas roupas e o medo de nunca voltar a ser quem eu era. Eu pensava: <i>‘Meu metabolismo deve ser lento demais’, ‘Já passei dos 30, não tem mais jeito’, ‘Vai ter efeito colateral ou vou gastar uma fortuna de novo’</i>. Até que um dia, uma amiga me falou de algo diferente: o <strong>OZENFIT CAPS</strong>. No começo, eu duvidei – já tinha caído em tantas promessas. Mas resolvi tentar. E aí, tudo mudou."
                    </p>
                </div>
            </div>
        </SectionTemplate>
    )
}