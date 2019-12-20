import React from "react";
import styled, {css} from 'styled-components'
import Image from "../components/image"
import heatXchanger from "../images/heatXchanger.jpg"



const Left = styled.div`
  width: 50%;
  /*background-color: #EAFAFA;*/

`

const Right = styled.div`
  /*background-color: #FAEAF7*/
  width: 50%;
  color: #32325d;
`

const Intro = ({ className, children}) => (
  <div className={className}>
    <Left>
      {children}
    </Left>
    <Right>
      <img src={heatXchanger} alt="Logo" />
    </Right>
  </div>
)

const StyledIntro = styled(Intro)`
  display: flex;

  Left {
    width: 50%;
  }

  h1 {
    color: #32325d;
    font-family: 'Open Sans', sans-serif;
    font-size: 42px;
    font-weight: 500;
  }

  h2 {
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    color: #525f7f;
    line-height: 32px;
    font-weight: 400;
  }
`

export default StyledIntro