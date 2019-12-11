import React from "react"
// import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Cube from "../Cubes/Cube"

// const getTours = graphql`
//   query {
//     featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
//       edges {
//         node {
//           name
//           price
//           slug
//           country
//           contentful_id
//           days
//           images {
//             fluid {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

const getCubes = graphql`
  query {
    upcomingCubes: allContentfulCube {
      edges {
        node {
          chapter
          id
          startTime
          endTime
          linkToEvent
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getCubes)
  const cubes = response.upcomingCubes.edges

  return (
    <section className={styles.tours}>
      <Title title="Upcoming" subtitle="Cubes" />
      <div className={styles.center}>
        {cubes.map(({ node }) => {
          return <Cube key={node.id} cube={node} />
        })}
      </div>
      {/* 
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink> */}
    </section>
  )
}

export default FeaturedTours
