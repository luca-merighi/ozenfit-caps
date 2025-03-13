import { ElementType } from 'react'

interface ListItemProps {
    bgColor: string,
    icon: ElementType,
    text: string
}

export default function ListItem({ bgColor, icon: Icon, text }: ListItemProps) {
    return (
        <li className="flex gap-2 items-center">
            <div className={`
                ${bgColor}
                self-start flex items-center justify-center
                p-2 text-sm md:text-base xl:text-lg text-white rounded-full`}>
                <Icon />
            </div>

            <span className="text-base md:text-lg xl:text-xl text-slate-700 font-medium">
                {text}
            </span>
        </li>
    )
}