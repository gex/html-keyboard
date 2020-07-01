import React, { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'
import { graphql } from 'gatsby'
import calculateWidth from '../utils/calculateWidth'
import calculateHeight from '../utils/calculateHeight'
import Layout from '../components/Layout'
import Keyboard from './html-elements/Keyboard'
import Keycap from './html-elements/Keycap'

const perfTest = keyframes`
  0% {
    width: 100%;
  }
  50% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
`

const Animation = styled.div`
  & ${Keyboard} {
    animation: ${perfTest} ease-in-out 750ms infinite;
  }
`

const HtmlElementsAnimated = ({
  data: {
    keycaps: { nodes: keycaps }
  }
}) => {
  const width = useMemo(() => calculateWidth(keycaps), [keycaps])
  const height = useMemo(() => calculateHeight(keycaps), [keycaps])

  return (
    <Layout>
      <h1>HTML elements with animation</h1>
      <Animation>
        <Keyboard {...{ width, height }}>
          {keycaps.map((keycap) => (
            <Keycap key={`keycap-${keycap.x}-${keycap.y}`} {...keycap} />
          ))}
        </Keyboard>
      </Animation>
    </Layout>
  )
}

export default HtmlElementsAnimated

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
