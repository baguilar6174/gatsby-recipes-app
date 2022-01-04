import React from 'react';
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
    {
        recipes: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/recipes/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                gatsbyImageData(tracedSVGOptions: {color: "#7b74ff"})
                            }
                        }
                        tags
                        servings
                        prepTime
                        instructions
                        ingredients
                        tools
                        feature
                        cookTime
                    }
                    html
                    id
                }
            }
        }
    }
`;

const AllRecipes = () => {

    const data = useStaticQuery(query);
    const recipes = data.recipes.edges.filter(({ node }) => node);

    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export default AllRecipes;