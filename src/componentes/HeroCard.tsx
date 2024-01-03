import { IconSword } from "@tabler/icons-react";

type HeroCardProps = {
    name: string,
    power: number,
    image: string,
    handleClick: (hero: Hero) => void
}

export default function HeroCard({name, power, image, handleClick}: HeroCardProps) {
    return (
        <div 
            className="flex flex-col items-center w-[250px] rounded-lg border border-slate-400 gap-2 px-3 pb-3 cursor-pointer"
            onClick={() => handleClick}
        >
            <img src={image} alt={name} />
            <div className="flex flex-col items-center gap-1">
                <h2 className="font-medium text-lg">{name}</h2>
                <p className="flex items-center gap-2">
                    <IconSword />
                    {power}
                </p>
            </div>
        </div>
    )
}