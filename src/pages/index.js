import React from "react"
import { Link } from "gatsby"
import styled, {css} from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Infobox from "../components/infobox"
import Intro from "../components/intro"
import heatXLogo from "../images/HeatX_Logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>HeatX</Title>
    {/* <StyledLogo src={heatXLogo} /> */}
    <Intro/>
    <Infobox>
        <h2>Biofouling Shield</h2>
        <p>
            Prevents tube blockages and combats the accumulation of unwanted bio-growth.  Fouling increases downtime, reduces efficiency, and pollutes the environment.
        </p>
    </Infobox>
    <h1>Hi people</h1>
    <p>Welcome.</p>
    
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


const StyledLogo = styled.img`
  height: 64px;
  margin-bottom: 64px;
`

const Title = styled.div`
    color: #DDA526;
    font-size: 32px;
    margin-bottom: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
`


export default IndexPage
