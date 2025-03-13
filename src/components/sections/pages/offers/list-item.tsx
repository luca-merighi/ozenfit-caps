import Image from 'next/image'
import Link from 'next/link'

import { FaArrowRight, FaTrophy } from 'react-icons/fa6'
import { CiDeliveryTruck } from 'react-icons/ci'

interface ListItemProps {
    item: {
        mostSold: boolean,
        treatmentType: string,
        offer: string,
        image: string,
        price: string,
        priceWithDiscount: string,
        url: string,
        deliver: string
    }
}

export default function ListItem({ item }: ListItemProps) {
    return (
        <li
            className="
            relative flex flex-col gap-6 md:gap-8 items-center justify-between
            w-full min-h-fit bg-white px-4 py-12 md:px-6 md:py-14
            rounded-md shadow-md">
            {item.mostSold === true && (
                <div className="
                    absolute z-30 -top-5
                    bg-emerald-400 px-4 py-2
                    flex gap-2 items-center justify-center
                    text-xl text-slate-950 font-black
                    border-2 border-white rounded-full">
                    <FaTrophy />
                    Mais Vendido
                </div>
            )}

            <header className="w-full text-center">
                <span className="pb-1 text-lg text-slate-700 font-medium border-b border-emerald-300">
                    {item.treatmentType}
                </span>
            </header>

            <div className="flex flex-col gap-4 items-center justify-center">
                <strong className="text-3xl text-slate-950 font-black font-lato">
                    {item.offer}
                </strong>

                <Image
                    src={item.image} alt="Imagem Demonstrativa da Oferta do Pote"
                    width={1024} height={1024} quality={100}
                    className="w-[75%]" />

                <div className="flex flex-col gap-2 items-center justify-center">
                    <span className="text-base text-slate-700">
                        12x de
                    </span>

                    <strong className="text-5xl text-emerald-500 font-black font-lato">
                        {item.price}
                    </strong>

                    <span className="text-sm text-slate-700">
                        Preço com desconto: {item.priceWithDiscount}
                    </span>
                </div>

                <Link
                    href={item.url}
                    target="_blank"
                    className="
                        w-full bg-emerald-500 px-6 py-3
                        flex gap-2 items-center justify-center
                        text-xl text-white font-black font-lato
                        border-2 border-transparent rounded-full
                        transition-colors hover:bg-emerald-400 focus:outline-none
                        focus-visible:bg-emerald-400 focus-visible:border-emerald-950">
                    Comprar Agora
                    <FaArrowRight />
                </Link>
            </div>

            <footer className="flex gap-4 items-center justify-center">
                <div className="flex gap-1 items-center justify-center text-slate-700 font-medium">
                    <CiDeliveryTruck className="text-3xl" />

                    <span className="text-lg">
                        Frete {item.deliver}
                    </span>
                </div>

                <Image
                    src="/images/correios.png" alt=""
                    width={150} height={70} quality={80}
                    className="w-20" />
            </footer>
        </li>
    )
}