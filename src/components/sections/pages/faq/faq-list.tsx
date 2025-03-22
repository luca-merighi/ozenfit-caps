import * as Accordion from '@radix-ui/react-accordion'

import ListItem from './list-item'

const list = [
    {
        value: 'value1',
        title: 'O que é o OzenFit Caps?',
        description: 'OzenFit Caps é um produto natural que traz os benefícios do Psyllium, Vitamina C, Cromo, Óleo de cartamo, Curcuma, Cafeina. Quando no organismo ele promove saciedade, emagrecimento, energia e saúde para o corpo.'
    },
    {
        value: 'value2',
        title: 'Como eu devo utilizar o OzenFit Caps?',
        description: 'Indica-se o uso de OzenFit Caps uma cápsula, uma vez ao dia nas principais refeições, ou uma cápsula antes da refeição principal. Recomendamos o uso contínuo, pois os resultados podem variar por pessoa.'
    },
    {
        value: 'value3',
        title: 'O OzenFit Caps possuí efeito colateral ou contra indicações?',
        description: 'OzenFit Caps não possui contraindicações, efeitos colaterais ou hormônios. O produto é indicado para qualquer pessoa.'
    },
    {
        value: 'value4',
        title: 'OzenFit Caps é aprovado pela ANVISA?',
        description: 'Sim, o OzenFit Caps tem aprovação da ANVISA e foi desenvolvido por especialistas e comprovado no controle da saúde do corpo. Os ingredientes que compõem sua fórmula são testados e aprovados para produzir os efeitos de emagrecimento.'
    },
    {
        value: 'value5',
        title: 'Como posso comprar o OzenFit Caps?',
        description: 'Para oferecer um produto com segurança, o OzenFit Caps é vendido apenas através deste site oficial. A venda do do OzenFit através de qualquer outro site pode colocar a sua SAÚDE EM RISCO. Não compre falsificações e garanta um produto de qualidade comprando APENAS através deste site oficial.'
    },
    {
        value: 'value6',
        title: 'Como funciona a garantia?',
        description: 'Se em 90 dias você não perder pelo menos 5kg ou não sentir nenhuma diferença, devolvemos 100% do seu dinheiro – sem burocracia. É só entrar em contato comigo aqui no WhatsApp, me contar sua experiência, e eu cuido do reembolso rapidinho.'
    },
]

export default function FAQList() {
    return (
        <Accordion.Root
            type="single"
            collapsible={true}
            className="w-full lg:w-[75%] flex flex-col gap-4">
            {list.map(item => {
                return (
                    <ListItem
                        key={item.value}
                        value={item.value}
                        title={item.title}
                        description={item.description} />
                )
            })}
        </Accordion.Root>
    )
}