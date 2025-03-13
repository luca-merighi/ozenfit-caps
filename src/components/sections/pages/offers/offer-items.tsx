import ListItem from './list-item'

const list = [
    {
        mostSold: true,
        treatmentType: 'Tratamento para 10 meses',
        offer: 'Compre 5 Leve 10',
        image: '/images/offers/offer-1.png',
        price: 'R$ 71,70',
        priceWithDiscount: 'R$ 697,00',
        url: 'https://ev.braip.com/ref?pl=plao146x&ck=cheqx91d&af=afiqe2ndqj',
        deliver: 'grátis'
    },
    {
        mostSold: false,
        treatmentType: 'Tratamento para 5 meses',
        offer: 'Compre 3 Leve 5',
        image: '/images/offers/offer-2.png',
        price: 'R$ 40,84',
        priceWithDiscount: 'R$ 397,00',
        url: 'https://ev.braip.com/ref?pl=planv4dy&ck=cheqx91d&af=afiqe2ndqj',
        deliver: 'grátis'
    },
    {
        mostSold: false,
        treatmentType: 'Tratamento para 3 meses',
        offer: 'Compre 2 Leve 3',
        image: '/images/offers/offer-3.png',
        price: 'R$ 30,55',
        priceWithDiscount: 'R$ 297,00',
        url: 'https://ev.braip.com/ref?pl=plamln1r&ck=cheqx91d&af=afiqe2ndqj',
        deliver: 'grátis'
    },
    {
        mostSold: false,
        treatmentType: 'Tratamento para 1 mês',
        offer: 'Leve 1 Pote',
        image: '/images/offers/offer-4.png',
        price: 'R$ 20,27',
        priceWithDiscount: 'R$ 197,00',
        url: 'https://ev.braip.com/ref?pl=pla0wely&ck=cheqx91d&af=afiqe2ndqj',
        deliver: 'R$ 29,90'
    },
]

export default function OfferItems() {
    return (
        <ul className="
            w-full flex flex-col md:grid md:grid-cols-2
            lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
            {list.map((item, index) => {
                return (
                    <ListItem
                        key={index}
                        item={item} />
                )
            })}
        </ul>
    )
}