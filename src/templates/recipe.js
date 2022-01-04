import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
const _ = require('lodash');

const RecipeTemplate = ({data}) => {

    const { frontmatter, html } = data.markdownRemark;
    const { cookTime, ingredients, instructions, prepTime, servings, tags, title, tools, image } = frontmatter;
    const pathToImage = getImage(image);

    return (
        <Layout>
            <main className="page">
                <div className="recipe-page">
                    {/* hero */}
                    <section className="recipe-hero">
                        <GatsbyImage
                            image={pathToImage}
                            alt={title}
                            className="about-img"
                        />
                        <article className="recipe-info">
                        <h2>{title}</h2>
                        {/* <p>{html}</p> */}
                        <p dangerouslySetInnerHTML={{ __html: html }} />
                        {/* icons */}
                        <div className="recipe-icons">
                            <article>
                            <BsClock />
                            <h5>prep time</h5>
                            <p>{prepTime} min.</p>
                            </article>
                            <article>
                            <BsClockHistory />
                            <h5>cook time</h5>
                            <p>{cookTime} min.</p>
                            </article>
                            <article>
                            <BsPeople />
                            <h5>serving</h5>
                            <p>{servings} </p>
                            </article>
                        </div>
                        {/* tags */}
                        <p className="recipe-tags">
                            Tags :
                            {tags.map((tag, index) => {
                            return (
                                <Link to={`/tags/${_.kebabCase(tag)}/`} key={index}>
                                {tag}
                                </Link>
                            )
                            })}
                        </p>
                        </article>
                    </section>
                    {/* rest of the content */}
                    <section className="recipe-content">
                        <article>
                        <h4>instructions</h4>
                        {instructions.map((item, index) => {
                            return (
                            <div key={index} className="single-instruction">
                                <header>
                                <p>step {index + 1}</p>
                                <div></div>
                                </header>
                                <p>{item}</p>
                            </div>
                            )
                        })}
                        </article>
                        <article className="second-column">
                        <div>
                            <h4>ingredients</h4>
                            {ingredients.map((item, index) => {
                            return (
                                <p key={index} className="single-ingredient">
                                {item}
                                </p>
                            )
                            })}
                        </div>
                        <div>
                            <h4>tools</h4>
                            {tools.map((item, index) => {
                            return (
                                <p key={index} className="single-tool">
                                {item}
                                </p>
                            )
                            })}
                        </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { slug: { eq: $path } }) {
            html
            frontmatter {
                slug
                cookTime
                ingredients
                instructions
                prepTime
                servings
                tags
                title
                tools
                image {
                    childImageSharp {
                        gatsbyImageData(tracedSVGOptions: {color: "#7b74ff"})
                    }
                }
            }
        }
    }
`;

export default RecipeTemplate;