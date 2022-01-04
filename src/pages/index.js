import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';

const Home = () => {
	return (
		<Layout>
			<main className='page'>
				<header className="hero">
					<StaticImage src='../assets/images/main.jpeg' alt='Main Image' className='hero-img' placeholder='tracedSVG' layout='fullWidth'/>
					<div className="hero-container">
						<div className="hero-text">
							<h1>Recetas Familiares</h1>
							{/* <h4>just recipes</h4> */}
						</div>
					</div>
				</header>
				<AllRecipes/>
			</main>
		</Layout>
	)
}

export default Home;