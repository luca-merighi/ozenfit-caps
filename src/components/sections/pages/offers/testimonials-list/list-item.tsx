import Image from 'next/image'

interface ListItemProps {
    image: string
}

export default function ListItem({ image }: ListItemProps) {
    return (
        <div className="
            keen-slider__slide min-h-fit
            flex items-center justify-center">
            <Image
                src={image} alt="Imagem de resultado de clientes"
                width={200} height={200} quality={100}
                className="w-full h-full object-cover rounded-md" />
        </div>
    )
}