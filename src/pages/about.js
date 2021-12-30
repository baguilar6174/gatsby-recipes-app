import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <Layout>
            <main className='page'>
                <section className='about-page'>
                    <article>
                        <h2>Gastby Recipes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, reiciendis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, adipisci! Aliquid qui mollitia sunt natus?</p>
                        <Link to='/contact' className='btn'>contact</Link>
                    </article>
                    <StaticImage src='../assets/images/about.jpeg' alt='About Image' className='about-img' placeholder='blurred'/>
                </section>
            </main>
        </Layout>
    )
}

export default AboutPage;