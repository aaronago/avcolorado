import React from 'react'
import { ScrollTo } from 'react-scroll-to'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
// import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'

import Chapters from '../components/Home/Chapters'
import Calendar from '../components/Home/Calendar'

const index = () => {
  const calendarRef = React.useRef()
  const hasWindow = typeof window !== 'undefined'

  return (
    <Layout>
      <StyledHero home="true">
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          {/* {hasWindow && (
            <ScrollTo>
              {({ scroll }) => (
                <a
                  className="btn-white"
                  onClick={() =>
                    scroll({ y: calendarRef.current.offsetTop, smooth: true })
                  }
                >
                  Cubes
                </a>
              )}
            </ScrollTo>
          )} */}
        </Banner>
      </StyledHero>
      <About />
      <Chapters />
      {hasWindow && <Calendar ref={calendarRef} />}
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
