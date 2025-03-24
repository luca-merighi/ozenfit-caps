import SectionTemplate from '../../section-template'
import TextPill from '../../text-pill'
import WhatsAppLink from '@/components/whatsapp-link'
import OfferItems from './offer-items'
import TestimonialsList from './testimonials-list'

import { PiPillFill  } from 'react-icons/pi'

export default function Offers() {
    return (
        <SectionTemplate
            id="offers"
            newBGColor="bg-gradient-to-t from-emerald-500 via-emerald-400 via-emerald-300 via-emerald-200 via-emerald-100 to-emerald-50"
            flexClass="flex flex-col gap-20 items-center">
            <div className="flex flex-col gap-3">
                <TextPill
                    bgGradientColor="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"
                    bgPill="bg-transparent"
                    icon={PiPillFill}
                    text="Ofertas"
                    textColor="text-white" />

                <div className="flex flex-col gap-3 text-base md:text-lg xl:text-xl text-slate-700">
                    <p>
                        Por que isso vale mais que R$39,90 por mês? Pense: você já gastou mais que isso em remédios caros que não duram, ou em roupas pra esconder o que não gosta. O OZENFIT CAPS não é só um produto – é a chance de recuperar sua confiança, caber nas suas roupas favoritas e viver sem vergonha. Os bônus sozinhos valem R$421,00, e o kit de 5 meses te dá resultados reais por menos de um café por dia.
                    </p>

                    <p>
                        E o risco? Zero. Nossa garantia é insana: teste por 90 dias. Se não perder pelo menos 5kg ou não sentir diferença, devolvemos o DOBRO do seu dinheiro – e você fica com os bônus. Sem perguntas, sem complicação.
                    </p>

                    <p>
                        Mas corre: só temos <strong>47 kits</strong> em estoque hoje. Eles estão saindo mais rápido que pão quente, e essa oferta acaba às <strong>23h59 ou quando zerar o estoque</strong>. Não deixe pra amanhã - garanta seu <strong>OZENFIT CAPS</strong> agora!
                    </p>
                </div>

                <WhatsAppLink
                    CSSClass="
                        uppercase self-center lg:self-start
                        bg-emerald-500 md:px-4
                        hover:bg-emerald-400 focus:outline-none
                        focus-visible:bg-emerald-400 focus-visible:border-emerald-950"
                    text="Entrar em Contato" />
            </div>

            <OfferItems />

            <TestimonialsList />
        </SectionTemplate>
    )
}