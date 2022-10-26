import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Pokemos404 from "../components/pokedexById/Pokemos404";
import Footerup from "../components/shared/Footerup";
import "../styles/pokedexbyid.css";
import "../styles/footer.css";

const PokedexById = () => {
	const { id } = useParams();
	const [pokemonByID, setPokemonByID] = useState();
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
		axios
			.get(URL)
			.then((res) => {
				setHasError(false), setPokemonByID(res.data);
			})
			.catch(() => setHasError(true));
	}, []);

	if (hasError) {
		return <Pokemos404 />;
	} else {
		return (
			<section className="pokedex-by-id">
				<Footerup />
				<main className="pokedex-by-id__main-container">
					<div
						className={`pokedex-by-id__bacckground  bg-${pokemonByID?.types[0].type.name}`}></div>
					<img
						className="pokedex-by-id__img"
						src={pokemonByID?.sprites.other["official-artwork"].front_default}
						alt=""
					/>
					<h1>#{pokemonByID?.id}</h1>

					<h3 className="pokedex-by-id__name">
						<div className="line"></div>
						{pokemonByID?.name[0].toUpperCase() +
							pokemonByID?.name.slice(1, pokemonByID?.name.lenght)}
						<div className="line"></div>
					</h3>
					<div className="info-container">
						<div className="pokedex-by-id__features-container">
							<h1 className="pokedex-by-id__features-title">Features:</h1>

							<div className="pokedex-by-id__size-container">
								<h3 className="pokedex-by-id__size-title">Size:</h3>
								<p className="pokedex-by-id__size--text">
									Weight<span>{pokemonByID?.weight}</span>
								</p>
								<p className="pokedex-by-id__size--text">
									Height<span>{pokemonByID?.height}</span>
								</p>
							</div>
							<div className="pokedex-by-id__features__types-container">
								<h3 className="pokedex-by-id__features__types-title">Type:</h3>
								{pokemonByID?.types.length == 1 ? (
									<li
										className={`pokedex-by-id-type ${pokemonByID?.types[0].type.name}`}>
										{`${pokemonByID?.types[0].type.name}`}
									</li>
								) : (
									<div className="pokedex-by-id__features__types-container">
										<li
											className={`pokedex-by-id-type ${pokemonByID?.types[0].type.name}`}>
											{`${pokemonByID?.types[0].type.name}`}
										</li>
										<li
											className={`pokedex-by-id-type ${pokemonByID?.types[1].type.name}`}>
											{`${pokemonByID?.types[1].type.name}`}
										</li>
									</div>
								)}
							</div>

							<div className="pokedex-by-id__abilities-container">
								<h3 className="pokedex-by-id__abilities-title">Skills:</h3>
								{pokemonByID?.abilities.map((abiliti) => (
									<li key={abiliti.ability.url} className="pokedex-by-id__skills">
										{abiliti.ability.name}
									</li>
								))}
							</div>
						</div>
						<div className="pokedex-by-id__stat-container">
							<h1>Stats:</h1>
							<div className="stat-bar">
								<h3 className="stat-bar__name">{pokemonByID?.stats[0].stat.name}</h3>
								<div className="stat-bar__empty">
									<div
										className={`stat-bar__full ${pokemonByID?.types[0].type.name}`}
										style={{ width: `${pokemonByID?.stats[0].base_stat}px` }}></div>
								</div>
								<h4 className="stat-bar__number">{pokemonByID?.stats[0].base_stat}</h4>
							</div>

							<div className="stat-bar">
								<h3 className="stat-bar__name">{pokemonByID?.stats[1].stat.name}</h3>
								<div className="stat-bar__empty">
									<div
										className={`stat-bar__full ${pokemonByID?.types[0].type.name}`}
										style={{ width: `${pokemonByID?.stats[1].base_stat}px` }}></div>
								</div>
								<h4 className="stat-bar__number">{pokemonByID?.stats[1].base_stat}</h4>
							</div>

							<div className="stat-bar">
								<h3 className="stat-bar__name">{pokemonByID?.stats[2].stat.name}</h3>
								<div className="stat-bar__empty">
									<div
										className={`stat-bar__full ${pokemonByID?.types[0].type.name}`}
										style={{ width: `${pokemonByID?.stats[2].base_stat}px` }}></div>
								</div>
								<h4 className="stat-bar__number">{pokemonByID?.stats[2].base_stat}</h4>
							</div>

							<div className="stat-bar">
								<h3 className="stat-bar__name">{pokemonByID?.stats[5].stat.name}</h3>
								<div className="stat-bar__empty">
									<div
										className={`stat-bar__full ${pokemonByID?.types[0].type.name}`}
										style={{ width: `${pokemonByID?.stats[5].base_stat}px` }}></div>
								</div>
								<h4 className="stat-bar__number">{pokemonByID?.stats[5].base_stat}</h4>
							</div>
						</div>
					</div>
				</main>
				<aside className="pokedex-by-id__movement-container">
					{" "}
					<h1>Moves:</h1>
					{pokemonByID?.moves.map((move) => (
						<li key={move.move.url} className="pokedex-by-id__movement">
							{move.move.name}
						</li>
					))}
				</aside>
			</section>
		);
	}
};

export default PokedexById;
