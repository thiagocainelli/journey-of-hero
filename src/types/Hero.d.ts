type Hero = {
    id: number,
    name: string,
    images: {
        xs: string,
        sm: string,
        md: string,
        lg: string
    }
    powerstats: {
        intelligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number
    }
}