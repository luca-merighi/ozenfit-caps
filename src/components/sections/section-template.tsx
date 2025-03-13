import { ReactNode } from 'react'
import * as motion from 'motion/react-client'

interface SectionTemplateProps {
    id: string,
    newBGColor?: string,
    flexClass: string,
    children: ReactNode
}

export default function SectionTemplate({ id, newBGColor, flexClass, children }: SectionTemplateProps) {
    return (
        <section
            id={id}
            className={`
            ${newBGColor}
            h-full lg:min-h-[calc(100vh-15rem)] w-full px-6 py-12 md:px-6 lg:py-20 xl:px-0
            flex items-center justify-center`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4 }
                }}
                className={`
                    ${flexClass}
                    h-full w-full max-w-7xl`}>
                    {children}
            </motion.div>
        </section>
    )
}