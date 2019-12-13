import React from 'react'
import { Link } from 'react-scroll'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'

import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

import Chapters from '../components/Home/Chapters'
import Calendar from '../components/Home/Calendar'

const index = () => {
  return (
    <Layout>
      <StyledHero home="true">
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <Link
            className="btn-white"
            to="calendar"
            spy={true}
            smooth={true}
            offset={70}
            duration={1000}
          >
            Calendar
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Chapters />
      <Calendar />
    </Layout>
  )
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "boulderBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default index
