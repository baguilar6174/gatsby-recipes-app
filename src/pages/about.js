import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from "gatsby";
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
                        <h2>Gastby Recipes</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, reiciendis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, adipisci! Aliquid qui mollitia sunt natus?</p>
                        <Link to='/contact' className='btn'>contact</Link>
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