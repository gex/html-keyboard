import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Keyboard from './Keyboard'
import Keycap from './Keycap'

const HtmlElements = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => (
  <Layout>
    <h1>HTML elements</h1>
    <Keyboard {...{ keycaps }}>
      {keycaps.map((keycap) => (
        <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
      ))}
    </Keyboard>
  </Layout>
)

export default HtmlElements

export const query = graphql`
  query {
    keycaps: allKeycap {
      nodes {
        x
        y
        width
        height
        color
      }
    }
  }
`
