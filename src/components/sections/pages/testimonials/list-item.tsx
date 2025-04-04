import Image from 'next/image'

interface ListItemProps {
    profileImage: string,
    name: string,
    age: number,
    description: string
}

export default function ListItem({ profileImage, name, age, description }: ListItemProps) {
    return (
        <div className="
            keen-slider__slide min-h-fit
            flex flex-col gap-6 justify-between
            bg-slate-100 p-4
            border-2 border-slate-200 rounded-md">
            <div className="relative">
                <span className="text-8xl font-serif text-emerald-500 absolute -top-4 -left-2">&ldquo;</span>

                <p className="indent-8 text-base text-slate-700">
                    {description}
                </p>
            </div>

            <div className="flex gap-2 items-center">
                <Image
                    src={profileImage} alt={`Imagem de perfil de ${name}`}
                    width={200} height={200} quality={80}
                    className="p-1 w-20 h-20 object-cover border-2 border-emerald-500 rounded-full" />

                <div className="flex flex-col gap-1">
                    <strong className="text-lg text-slate-950 font-bold font-lato">
                        {name}
                    </strong>

                    <span className="text-base text-slate-700">
                        {age} anos
                    </span>
                </div>
            </div>
        </div>
    )
}