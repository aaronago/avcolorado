import React from 'react'
import Image from 'gatsby-image'
import styles from '../../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultCubeThumb.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Chapter = ({ chapter }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={img} className={styles.img} alt="single tour" />
        <a
          className={styles.link}
          href={chapter.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {chapter.label}
          </h4>
          <div className={styles.details} />
        </div>
      </div>
    </article>
  )
}

export default Chapter
