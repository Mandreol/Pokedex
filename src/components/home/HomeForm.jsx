import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/userName.slice";
import "../../styles/formBtn.css";

const HomeForm = () => {
	const [hasError, setHasError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const submit = (e) => {
		e.preventDefault();
		if (e.target.input.value !== "") {
			dispatch(setUserNameGlobal(e.target.input.value.trim()));
			navigate("./pokedex");
		} else {
			setHasError(true);
		}
	};
	const handleChange = () => {
		setHasError(false);
	};
	return (
		<form onSubmit={submit} className="home__form">
			<input
				id="input"
				type="text"
				className="home__input"
				placeholder="Enter your name"
				onChange={handleChange}
			/>
			<button className="pokedex__btn">
				¡Catch them all!
				<div id="clip">
					<div id="leftTop" className="corner"></div>
					<div id="rightBottom" className="corner"></div>
					<div id="rightTop" className="corner"></div>
					<div id="leftBottom" className="corner"></div>
				</div>
				<span id="rightArrow" className="arrow"></span>
				<span id="leftArrow" className="arrow"></span>
			</button>
			<p>{hasError ? "Enter your name pleace" : ""}</p>
		</form>
	);
};

export default HomeForm;
