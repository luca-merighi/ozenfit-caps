import { ElementType } from 'react'

interface TextPillProps {
    bgGradientColor: string,
    bgPill: string,
    icon?: ElementType,
    text: string,
    textColor: 'text-white' | 'text-slate-950'
}

export default function TextPill({ bgGradientColor, bgPill, icon: Icon, text, textColor }: TextPillProps) {
    return (
        <div className={`
            ${bgGradientColor}
            w-fit p-[2px] rounded-full`}>
            <div className={`
                ${textColor} ${bgPill}
                w-full h-full px-2 py-1
                flex gap-1 items-center
                text-sm lg:text-lg font-bold font-lato rounded-full`}>
                {Icon && ( <Icon className="text-base" /> )}

                <span>{text}</span>
            </div>
        </div>
    )
}