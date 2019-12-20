import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components'
import oceanitLogo from "../images/oceanit_logo_color_horizontal.svg"


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => 
    props.primary && 
    css`
      background: palevioletred;
      color: white;
    `
  }
`

const StyledH1 = styled.h1`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #32325d;
  a{
    color: #32325d;
    text-decoration: none;
  }
`


const Header = ({ className, children, siteTitle }) => (
  <header className={className}>
    <Container>
      <StyledLogo src={oceanitLogo} />
      <StyledH1 >
        <Link to="/">
          
        </Link>
      </StyledH1>
    </Container>
    {/* <Button> I'm a button! </Button> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledLogo = styled.img`
  height: 32px;
  margin: 16px;
`

const Container = styled.div`
  /*background-color: red;*/
  max-width: 1040px;
  width: 100%;
  display: flex;

`

const StyledHeader = styled(Header)`
  backdrop-filter: saturate(180%) blur(7px);
  background-color: rgba(255,255,255,0.7);
  margin-bottom: 48px;
  /*padding: 20px;*/
  position: sticky;
  top: 0;
  //crop line height
  display: flex;
  justify-content: center;
  &::before {
    margin-top: -10px;
    content: "";
  }

  //this is the bottom gray border
  &::after {
    left: 0;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    width: 100%;
    height: 1px;
    z-index: 1;
    background-color: rgba(29,29,31,0.1);
  }
`


export default StyledHeader
