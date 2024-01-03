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
        if (selectedHeros.length < 2) {
            const isHeroSelected = selectedHeros.some(selectedHero => selectedHero.id === hero.id);
            if (!isHeroSelected) {
                const updatedSelectedHeros = [...selectedHeros, hero];
                setSelectedHeros(updatedSelectedHeros);
            }
        } else {
            alert("Erro... Já foram selecionados 2 heróis!")
            return;
        }
        console.log(selectedHeros);
        console.log(selectedHeros.length)
        console.log(modalIsOpen)
    }

    useEffect(() => {
        if (selectedHeros.length === 2) {
            setModalIsOpen(true);
        } else {
            setModalIsOpen(false);
        }
    }, [selectedHeros]);

    const fetchHero = async () => {
        try {
            const response = await axios.get(`http://homologacao3.azapfy.com.br/api/ps/metahumans`);
            setHeroData(response.data);
            console.log(response.data);
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
                        selected={selectedHeros.some(selectedHero => selectedHero.id === hero.id)}
                        handleClick={() => handleSelectHero(hero)}
                    />
                )}
            </div>

            {modalIsOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40">
                    <div
                        className="bg-white p-5 rounded-lg text-black flex flex-col items-center gap-5"
                        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                    >
                        <h2><span>Winner</span>Hulk</h2>

                        <div className="w-full flex justify-between items-center gap-[50px]">
                            <div key={selectedHeros[0].id} className="flex gap-3 items-center">
                                <div className="flex flex-col gap-2">
                                    <img src={selectedHeros[0].images.md} alt={selectedHeros[0].name} />
                                    <p>{selectedHeros[0].name}</p>
                                </div>
                                <div className="flex flex-col gap-2 text-lg">
                                    <p>{selectedHeros[0].powerstats.intelligence}</p>
                                    <p>{selectedHeros[0].powerstats.strength}</p>
                                    <p>{selectedHeros[0].powerstats.speed}</p>
                                    <p>{selectedHeros[0].powerstats.durability}</p>
                                    <p>{selectedHeros[0].powerstats.power}</p>
                                    <p>{selectedHeros[0].powerstats.combat}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-lg font-bold">
                                <h2>Intelligence</h2>
                                <h2>Strength</h2>
                                <h2>Speed</h2>
                                <h2>Durability</h2>
                                <h2>Power</h2>
                                <h2>Combat</h2>
                            </div>

                            <div key={selectedHeros[1].id} className="flex gap-3 items-center">
                                <div className="flex flex-col gap-2 text-lg">
                                    <p>{selectedHeros[1].powerstats.intelligence}</p>
                                    <p>{selectedHeros[1].powerstats.strength}</p>
                                    <p>{selectedHeros[1].powerstats.speed}</p>
                                    <p>{selectedHeros[1].powerstats.durability}</p>
                                    <p>{selectedHeros[1].powerstats.power}</p>
                                    <p>{selectedHeros[1].powerstats.combat}</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <img src={selectedHeros[1].images.md} alt={selectedHeros[1].name} />
                                    <p>{selectedHeros[1].name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}