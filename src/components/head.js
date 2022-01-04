import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {

    const { pathname } = useLocation();

    const { site } = useStaticQuery(
        graphql`
        query {
            site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl
                defaultImage: image
                author
            }
            }
        }
        `,
    );

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        author,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        canonical: siteUrl,
        author: author,
    };

    return (
        <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="es" />
            <meta charset="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description" content={seo.description} />
            <meta name="author" content={seo.author}/>
            <link rel="canonical" href={seo.canonical}/>
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}

export default Head;