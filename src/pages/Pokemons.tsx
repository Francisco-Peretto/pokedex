import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

import { fetchPokemons } from "../api/fetchPokemons";
import styles from "./pokemons.module.css"
import { Pokemon } from "../types/types";

const Pokemons = () => {
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
        };
    fetchAllPokemons();
    }, []);
    
    return ( // fragment
        <> 
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav className={styles.nav}>
                    {pokemons?.map((pokemon) => (
                        <Link 
                            key={pokemon.id} 
                            className={styles.listItem} 
                            to={`/pokemons/${pokemon.name.toLowerCase()}`}
                        >
                            <img
                                className={styles.listItemIcon}
                                src={pokemon.imgSrc}
                                alt={pokemon.name}
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                        </Link>
                    ))}
                </nav>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;