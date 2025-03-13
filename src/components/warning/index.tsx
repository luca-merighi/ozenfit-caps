interface WarningProps {
    bgColor: string,
    text: string,
    icon: string
}

export default function Warning({ bgColor, text, icon }: WarningProps) {
    return (
        <header className={`
            ${bgColor}
            w-full px-6 py-4
            flex items-center justify-center`}>
            <div className="w-full max-w-7xl text-center">
                <strong className="text-sm md:text-base text-white font-medium">
                    {text} <span className="animate-pulse">{icon}</span>
                </strong>
            </div>
        </header>
    )
}