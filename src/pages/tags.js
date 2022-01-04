import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
const _ = require('lodash');

const TagsPage = ({data}) => {

    const recipes = data.recipes.edges.filter(({ node }) => node);
    const newTags = setupTags(recipes);

    return (
        <Layout>
            <main className="page">
                <section className="tags-page">
                {newTags && newTags.map((tag, index) => {
                    
                    const [text, value] = tag

                    return (
                        <Link to={`/tags/${_.kebabCase(text)}/`} key={index} className="tag">
                            <h5>{text}</h5>
                            <p>{value} recipe</p>
                        </Link>
                    )
                })}
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
    {
    recipes: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/recipes/"}}) {
        edges {
            node {
                frontmatter {
                tags
                }
            }
        }
    }
}`;

export default TagsPage;