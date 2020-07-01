import React from 'react'
import styled from 'styled-components'
import Styles from './Styles'

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 5rem;
  min-height: 100vh;
  padding: 0 2rem;
`

const StyledP = styled.p`
  line-height: 5rem;
  margin: 0;
  text-align: center;
`

const Layout = ({ children }) => (
  <>
    <Styles />
    <StyledDiv>
      <header>
        <h1>HTML Perf</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/html-elements">HTML elements</a> /{' '}
              <a href="/html-elements-animated">with animation</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <StyledP>
          made by <a href="https://github.com/gex">gex</a> |{' '}
          <a href="https://github.com/gex/html-perf">github repository</a>
        </StyledP>
      </footer>
    </StyledDiv>
  </>
)

export default Layout
