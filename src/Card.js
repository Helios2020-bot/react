 /** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import './Card.css';
import img from './logo.svg';
import {jsx} from '@emotion/react';

class Card extends React.Component{
  render(){
    return(
      <div css={
        {
          color: 'red'
        }
      }>
      <div className="wrapper">
      <div className="card">
        <img src={img} alt="Avatar"/>
        <div className="container">
        <h4><b>React</b></h4>
        <p>Architect & Engineer</p>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Card;
