import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

export const query = graphql`
    {
        recipes: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/recipes/"}, frontmatter: {feature: {eq: true}}}
        ) {
        edges {
            node {
                frontmatter {
                    title
                    slug
                    image {
                        childImageSharp {
                            gatsbyImageData(tracedSVGOptions: {color: "#7b74ff"})
                        }
                    }
                    prepTime
                    cookTime
                    tags
                }
                id
            }
        }
        }
    }
`;

const AboutPage = ({data}) => {

    const recipes = data.recipes.edges.filter(({ node }) => node);

    return (
        <Layout>
            <main className='page'>
                <section className='about-page'>
                    <article>
                        <h2>Recetas familaires</h2>
                        <p>Esta página ha sido creada por <a href="https://www.bryan-aguilar.com/" target="_blank" rel="noreferrer">Bryan Aguilar</a> como un sitio estático donde se puede publicar recetas de cocina familiares.</p>
                        {/* <Link to='/contact' className='btn'>contacto</Link> */}
                        <a className='btn' href="https://www.bryan-aguilar.com/" target="_blank" rel="noreferrer">Bryan Aguilar</a>
                    </article>
                    <StaticImage src='../assets/images/about.jpeg' alt='About Image' className='about-img' placeholder='blurred'/>
                </section>
                <section className='featured-recipes'>
                    <h5>Recetas destacadas</h5>
                    <RecipesList recipes={recipes} />
                </section>
            </main>
        </Layout>
    )
}

export default AboutPage;