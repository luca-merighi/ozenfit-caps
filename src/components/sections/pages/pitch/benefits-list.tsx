import { FaDumbbell, FaHamburger, FaPlus, FaHeartbeat } from 'react-icons/fa'

import ListItem from './list-item'

const list = [
    {
        bgColor: 'bg-amber-500',
        icon: FaDumbbell,
        text: 'Queime calorias sem a prática de exercícios constantes'
    },
    {
        bgColor: 'bg-rose-500',
        icon: FaHamburger,
        text: 'Reduz a vontade de comer e aumenta a saciedade - Sem precisar parar de comer o que você gosta'
    },
    {
        bgColor: 'bg-blue-500',
        icon: FaPlus,
        text: 'Melhora no funcionamento do intestino'
    },
    {
        bgColor: 'bg-rose-500',
        icon: FaHeartbeat,
        text: '100% natural e saudável, sem efeitos colaterais - Resultados Satisfatórios'
    }
]

export default function BenefitsList() {
    return (
        <ul className="w-full p-4 bg-slate-200 flex flex-col gap-4 rounded-md">
            {list.map((item, index) => {
                return (
                    <ListItem
                        key={`benefit-${index}`}
                        bgColor={item.bgColor}
                        icon={item.icon}
                        text={item.text} />
                )
            })}
        </ul>
    )
}