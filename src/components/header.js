import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components'

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

// const Header = styled.div`
//   background-color: yellow;
// `

const Header = ({ className, children, siteTitle }) => (
  <header className={className}>
    <div>
      <h1 >
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Button> I'm a button! </Button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


const StyledHeader = styled(Header)`
  backdrop-filter: saturate(180%) blur(7px);
  background-color: rgba(255,255,255,0.7);
  
  padding: 20px;
  position: sticky;
  top: 0;
`


export default StyledHeader
