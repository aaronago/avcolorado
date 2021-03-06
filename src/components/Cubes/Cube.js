import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
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

const Cube = ({ cube }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { name, linkToEvent, chapter, startTime, endTime, images } = cube

  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <a
          className={styles.link}
          href={linkToEvent}
          target="_blank"
          rel="noopener noreferrer"
        >
          Event
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {chapter || 'default country'}
          </h4>
          <div className={styles.details}>
            {/* <h6>{days} days</h6>
            <h6>from ${price}</h6> */}
          </div>
        </div>
      </div>
    </article>
  )
}

// Cube.propTypes = {
//   tour: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     days: PropTypes.number.isRequired,
//     images: PropTypes.arrayOf(PropTypes.object).isRequired,
//   }),
// }

export default Cube
