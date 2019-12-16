import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "hulyaDenver.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="av" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>What We Do</h4>
          <p>
            From the{' '}
            <a
              href="https://www.anonymousforthevoiceless.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anonymous for the Voiceless website:
            </a>
          </p>
          <p>
            <em>
              Anonymous for the Voiceless (AV) is a global animal rights
              organization that holds an abolitionist stance against ALL forms
              of animal exploitation.
            </em>
          </p>
          <p>
            <em>
              We host Cube of Truth demonstrations around the world to edify the
              public and empower them to live vegan and be a voice for the
              voiceless. We use video footage of standard practices combined
              with personalized, one on one outreach interactions.
            </em>
          </p>
          <p>
            The best way to get involved and stay up to date on events is to
            find your chapter below and join the facebook group.
          </p>
          <a
            href="https://www.anonymousforthevoiceless.org/resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn-primary">
              Why Vegan
            </button>
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
