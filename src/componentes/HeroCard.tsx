import { IconSword } from "@tabler/icons-react";

type HeroCardProps = {
    name: string,
    power: number,
    image: string,
    handleClick: () => void,
    selected: boolean
}

export default function HeroCard({name, power, image, selected, handleClick}: HeroCardProps) {
    return (
        <div 
            className={`flex flex-col items-center w-[250px] rounded-lg border-2 border-sky-800 gap-2 pb-3 cursor-pointer ${selected ? "border-3 border-green-500 scale-105" : ""}`}
            onClick={handleClick}
        >
            <img src={image} alt={name} className="rounded-t-lg" />
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