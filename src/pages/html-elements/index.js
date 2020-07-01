import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import calculateWidth from '../../utils/calculateWidth'
import calculateHeight from '../../utils/calculateHeight'
import Layout from '../../components/Layout'
import Keyboard from './Keyboard'
import Keycap from './Keycap'

const HtmlElements = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  return (
    <Layout>
      <h1>HTML elements</h1>
      <Keyboard {...{ width, height }}>
        {keycaps.map((keycap) => (
          <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
        ))}
      </Keyboard>
    </Layout>
  )
}

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
