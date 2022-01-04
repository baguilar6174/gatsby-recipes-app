import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
    return (
        <div className="recipes-list">
            {recipes && recipes.map(({ node }, i) => {
                
                const { frontmatter } = node;
                const { title, prepTime, image, slug } = frontmatter;
                const pathToImage = getImage(image);

                return (
                    <Link key={i} to={slug} className="recipe">
                        <GatsbyImage image={pathToImage} className="recipe-img" alt={title}/>
                        <h5>{title}</h5>
                        {/* <p>Prep : {prepTime}min | Cook : {cookTime}min</p> */}
                        <p>Preparación : {prepTime}min</p>
                    </Link>
                );
            })}
        </div>
    )
}

export default RecipesList;