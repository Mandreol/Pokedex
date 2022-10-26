import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/pokedex.css";
const SelectByType = ({ setTypeSelected, setPage }) => {
	const [types, setTypes] = useState();

	useEffect(() => {
		const URL = "https://pokeapi.co/api/v2/type";
		axios
			.get(URL)
			.then((res) => setTypes(res.data.results))
			.catch((err) => console.log(err));
	}, []);
	const handleChange = (e) => {
		setTypeSelected(e.target.value);
		setPage(1);
	};

	return (
		<select onChange={handleChange} className="pokedex__selected">
			<option className="pokedex__option" value="All pokemons">
				Select your pokemon by type
			</option>
			<option className="pokedex__option" value="All pokemons">
				All pokemons
			</option>
			{types?.map((type) => (
				<option key={type.url} className="pokedex__option" value={type.url}>
					{type.name}
				</option>
			))}
		</select>
	);
};

export default SelectByType;
