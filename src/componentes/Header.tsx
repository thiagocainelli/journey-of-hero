import { IconCards, IconUser } from "@tabler/icons-react";

export default function Header() {
    return (
        <>
            <header className="flex flex-row bg-slate-800 w-full py-1 px-10 justify-end items-center gap-10">
                <button className="rounded-lg px-5 py-3 flex items-center gap-2 bg-slate-700">
                    <IconCards />
                    Cartas
                </button>
                <div className="flex flex-col items-center">
                    <div className="rounded-full bg-slate-500 flex items-center justify-center w-10 h-10"><IconUser className="w-8 h-8" />
                    </div>
                    <h1 className="text-lg">Thiago</h1>
                </div>
            </header>
        </>
    )
}