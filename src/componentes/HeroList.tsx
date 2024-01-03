import { IconSearch } from "@tabler/icons-react";
import HeroCard from "./HeroCard";
import { useEffect, useState } from "react";
import axios from "axios";


export default function HeroList() {

    const [searchHero, setSearchHero] = useState<string>("");
    const [heroData, setHeroData] = useState<Hero[]>([]);
    const [selectedHeros, setSelectedHeros] = useState<Hero[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const handleSelectHero = (hero: Hero) => {
        if(selectedHeros.length < 2) {
            const isHeroSelected = selectedHeros.some(selectedHero => selectedHero.id === hero.id);
            if (!isHeroSelected) {
                const updatedSelectedHeros = [...selectedHeros, hero];
                setSelectedHeros(updatedSelectedHeros);
            }
        }
    }

    if(selectedHeros.length === 2) {
        setModalIsOpen(true);
    }

    const fetchHero = async () => {
        try {
            const response = await axios.get(`http://homologacao3.azapfy.com.br/api/ps/metahumans`);
            setHeroData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchHero();
    }, []);

    const filteredHero = heroData.filter(hero => hero.name.toLowerCase().includes(searchHero.toLowerCase()))

    return (
        <section className="flex flex-col gap-10 max-w-[1200px] w-full">
            <div className="w-full flex items-center justify-center">
                <div className="rounded-s-lg bg-slate-700 flex items-center justify-center w-12 h-12"><IconSearch /></div>
                <input
                    type="text"
                    className="md:w-[30%] w-full rounded-e-lg outline-none bg-slate-700 text-slate-50 p-3"
                    placeholder="Pesquisar herói..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchHero(e.target.value)}
                />
            </div>

            <div className="flex items-center justify-center flex-wrap gap-5">
                {filteredHero && filteredHero.map(hero =>
                    <HeroCard 
                        key={hero.id} 
                        name={hero.name} 
                        power={hero.powerstats.intelligence} 
                        image={hero.images.md} 
                        handleClick={() => handleSelectHero(hero)}
                    />
                )}
            </div>

            {modalIsOpen && (
                <div className="">
                    <div>
                        
                    </div>
                </div>
            )}

        </section>
    )
}