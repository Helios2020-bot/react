 /** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

// import { render } from "@testing-library/react";


// import './Aside.css';
 const style = css `
  color : red;
  font-weight: bold;

  `;
// const style = css `color: 'hotpink';`
// const style = css`
//   color: hotpink;
// `

const Aside=function Aside(){
  return(
    <div >
    <aside>
      <p css={style}>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions,
      international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>
    </div>

  )
}
// You have tried to stringify object returned from `css` function.
//  It isn't supposed to be used directly (e.g. as value of the `className` prop),
// but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

export default Aside;
