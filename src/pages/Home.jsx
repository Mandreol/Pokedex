import React from "react";
import HomeForm from "../components/home/HomeForm";
import "../styles/home.css";

const Home = () => {
	return (
		<article className="home">
			<div className="home__img-container">
				<img src="../img/poquedex.png" className="home__img"></img>
			</div>

			<header className="home__header">
				<h2 className="home__subtitle">¡Hi Trainer!</h2>
				<p className="home__text">Give me your name to see the pokedex... </p>
			</header>
			<HomeForm />
		</article>
	);
};

export default Home;
