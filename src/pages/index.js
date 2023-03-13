import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import AllRecipes from '../components/AllRecipes';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is a home page of simply recipes" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="dominantColor"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Home;
