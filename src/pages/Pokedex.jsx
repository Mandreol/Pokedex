import React from "react";
import { useSelector } from "react-redux";
import CardPoke from "../components/pokedex/CardPoke";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/pokedex.css";
import InputSearch from "../components/pokedex/InputSearch";
import SelectByType from "../components/pokedex/SelectByType";
import "../styles/formBtn.css";
import Footerup from "../components/shared/Footerup";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
	const [pokemons, setPokemons] = useState();
	const [typeSelected, setTypeSelected] = useState("All pokemons");
	const [page, setPage] = useState(1);
	const [pokePerPage, setPokePerPage] = useState(16);
	const initialPoke = (page - 1) * pokePerPage;
	const finalPoke = page * pokePerPage;

	useEffect(() => {
		if (typeSelected === "All pokemons") {
			const URL = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
			axios
				.get(URL)
				.then((res) => setPokemons(res.data.results))
				.catch((err) => console.log(err));
		} else {
			axios
				.get(typeSelected)
				.then((res) => {
					const result = res.data.pokemon.map((e) => e.pokemon);
					setPokemons(result);
				})
				.catch((err) => console.log(err));
		}
	}, [typeSelected]);

	const userName = useSelector((state) => state.userName);

	return (
		<div className="pokedex">
			<Footerup />
			<header className="pokedex__header">
				<p className="pokedex__text">
					¡Welcome <span>{userName}</span>! Here you can find your favorites
					pokemons.
				</p>
			</header>
			<aside className="pokedex__aside">
				<InputSearch />
				<SelectByType setTypeSelected={setTypeSelected} setPage={setPage} />
				<Pagination
					page={page}
					pageLength={pokemons && Math.ceil(pokemons?.length / pokePerPage)}
					setPage={setPage}
				/>
			</aside>
			<main>
				<div className="card-container">
					{pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
						<CardPoke key={pokemon.name} url={pokemon.url} />
					))}
				</div>
			</main>
		</div>
	);
};

export default Pokedex;
