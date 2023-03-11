import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Farm-to-table intelligentsia organic</h2>
            <p>
              DIY tofu small batch fingerstache meditation chambray pitchfork.
              Gorpcore forage polaroid butcher mumblecore fashion axe locavore
            </p>
            <p>
              DIY tofu small batch fingerstache meditation chambray pitchfork.
              Gorpcore forage polaroid butcher mumblecore fashion axe locavore
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
