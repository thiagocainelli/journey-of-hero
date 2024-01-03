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
            className={`relative flex flex-col items-center w-[250px] rounded-lg border-[3px] border-sky-800 gap-2 pb-3 cursor-pointer ${selected ? "border-[5px] border-green-500 scale-105" : ""}`}
            onClick={handleClick}
        >
            {selected && <div className="absolute top-0 bottom-0 w-full bg-white bg-opacity-30"></div>}
            
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