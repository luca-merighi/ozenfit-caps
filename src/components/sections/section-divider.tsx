interface SectionDividerProps {
    bgGradientDirection: 'left' | 'right'
}

export default function SectionDivider({ bgGradientDirection }: SectionDividerProps) {
    const getGradientDirection = bgGradientDirection === 'left' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'

    return (
        <div className={`w-full h-[2px] ${getGradientDirection} from-emerald-400 via-green-400 to-teal-400`} />
    )
}