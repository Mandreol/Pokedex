import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pokedex.css";
const InputSearch = () => {
	const navigate = useNavigate();

	const submit = (e) => {
		e.preventDefault();
		navigate(e.target.search.value.trim().toLowerCase());

		console.log(e.target.search.value.trim().toLowerCase());
	};

	return (
		<form onSubmit={submit} className="pokedex__form">
			<input
				id="search"
				className="pokedex__input"
				type="text"
				placeholder="Search pokemon"
			/>
			<button className="pokedex__btn">
				Search
				<div id="clip">
					<div id="leftTop" className="corner"></div>
					<div id="rightBottom" className="corner"></div>
					<div id="rightTop" className="corner"></div>
					<div id="leftBottom" className="corner"></div>
				</div>
				<span id="rightArrow" className="arrow"></span>
				<span id="leftArrow" className="arrow"></span>
			</button>
		</form>
	);
};

export default InputSearch;
