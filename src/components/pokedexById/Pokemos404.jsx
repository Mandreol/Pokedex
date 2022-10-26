import React from "react";
import { Link } from "react-router-dom";

const Pokemos404 = () => {
	return (
		<div>
			<h1>Pokemosn not found</h1>
			<Link to={"/pokedex"}>GO to Pokedex!</Link>
		</div>
	);
};

export default Pokemos404;
