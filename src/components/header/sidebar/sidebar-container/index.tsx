import * as Dialog from '@radix-ui/react-dialog'

import NavLinks from '../../nav-links'

import { HiX } from 'react-icons/hi'

export default function SidebarContainer() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="
                fixed inset-0 z-50 bg-gradient-to-r from-transparent via-slate-950/15 to-slate-950/25
                data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide" />
            <Dialog.Content className="
                fixed top-0 right-0 z-50 w-[60%] md:w-[50%] lg:w-[30%] h-full bg-slate-50  focus:outline-none
                data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide">
                <header className="w-full p-6 flex flex-col gap-4 items-center">
                        <div className="w-full flex items-center justify-between">
                            <Dialog.Title className="text-2xl text-emerald-500 font-bold">
                                Menu
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button
                                    type="button"
                                    title="Fechar Menu"
                                    className="
                                        flex items-center justify-center
                                        p-0.5 text-2xl text-slate-700
                                        border-2 border-transparent rounded-md
                                        transition-colors ">
                                    <HiX />
                                </button>
                            </Dialog.Close>
                        </div>

                        <Dialog.Description className="text-sm text-slate-700">
                            Links para navegar pelo site.
                        </Dialog.Description>

                        <div className="mt-4 w-full h-[1px] bg-slate-200" />
                    </header>

                    <NavLinks location="sidebar" />
            </Dialog.Content>
        </Dialog.Portal>
    )
}