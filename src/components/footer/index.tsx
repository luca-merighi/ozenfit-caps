import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="
            bg-emerald-100 px-6 py-12 xl:py-6 xl:px-0
            flex items-center justify-center">
            <div className="
                w-full max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:items-end">
                <div className="flex flex-col gap-3 lg:w-[50%]">
                    <Link
                        href="/"
                        className="
                            w-[50%] md:w-64
                            border-2 border-transparent rounded-md
                            transition-colors focus:outline-none
                            focus-visible:border-emerald-900">
                        <Image
                            src="/images/logo.png" alt="Logo OzenFit Caps"
                            width={700} height={220} quality={100}
                            className="" />
                    </Link>

                    <div className="flex flex-col gap-1 text-base lg:text-lg text-black">
                        <span>Todos os Direitos Reservados</span>
                        <span>© 2022 - 2025</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 text-sm lg:text-base text-slate-700 lg:w-[50%]">
                    <span><strong>Horário de Atendimento:</strong> Seg-Sexta 9:00h as 18:00h</span>

                    <span><strong>CNPJ:</strong> 48.200.426/0001-15</span>

                    <span><strong>Endereço:</strong> Rua Marechal Floriano 654 Sala 710 Centro Governador Valadares MG 35010-141</span>
                </div>
            </div>
        </footer>
    )
}