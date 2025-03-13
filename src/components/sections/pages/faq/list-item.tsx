import * as Accordion from '@radix-ui/react-accordion'

import { IoChevronDown } from 'react-icons/io5'

interface ListItemProps {
    value: string,
    title: string,
    description: string,
}

export default function ListItem({ value, title, description }: ListItemProps) {
    return (
        <Accordion.Item
            value={value}
            className="
                overflow-hidden w-full bg-emerald-800 group
                rounded-lg min-h-fit
                transition-colors focus-within:relative focus-within:z-10
                focus-within:shadow-[0_0_0_2px] focus-within:shadow-emerald-50">
            <Accordion.Header className="flex">
                <Accordion.Trigger
                    className="
                    group w-full p-4 flex gap-4 items-center justify-between outline-none
                    transition-colors hover:bg-emerald-700 group-focus-within:bg-emerald-700">
                    <div className="
                        w-fit text-base xl:text-xl text-white font-medium text-left">
                        {title}
                    </div>

                    <IoChevronDown
                        className="
                        transition-all duration-300
                        text-lg text-white
                        group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
                className="
                    pt-0 text-base md:text-lg lg:text-xl text-slate-200 lg:leading-7
                    overflow-hidden
                    data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <div className="w-full h-[2px] bg-emerald-900" />

                    <div className="p-4 text-left">
                        {description}
                    </div>
            </Accordion.Content>
        </Accordion.Item>
    )
}