import React from 'react';
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";

const TagTemplate = ({ data, pageContext }) => {

    const recipes = data.recipes.edges.filter(({ node }) => node);

    return (
        <Layout>
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-recipes">
                <RecipesList recipes={recipes} />
                </div>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
        query($tag: String!) {
            recipes: allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag }}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        cookTime
                        prepTime
                        image {
                            childImageSharp {
                            gatsbyImageData(tracedSVGOptions: {color: "#7b74ff"})
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default TagTemplate;